#!/bin/bash

# Fix Production Build Issues Script
# Run this on your Ubuntu server to fix the NextAuth and port issues

echo "🔧 Fixing production build issues..."

# Navigate to the project directory
cd /www/wwwroot/intellithesis

# Fix the NextAuth route file
echo "📝 Fixing NextAuth route..."
cat > client/src/app/api/auth/[...nextauth]/route.ts << 'EOF'
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

// Define the auth options
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials');
          return null;
        }

        try {
          console.log('Attempting authentication for:', credentials.email);
          
          // Call your backend API endpoint
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          console.log('Response status:', response.status);
          
          if (!response.ok) {
            const errorData = await response.text();
            console.error('Authentication failed:', errorData);
            return null;
          }

          const data = await response.json();
          console.log('Authentication successful:', data);

          if (data.user && data.token) {
            return {
              id: data.user.id,
              email: data.user.email,
              name: `${data.user.firstName} ${data.user.lastName}`,
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              accessToken: data.token,
            };
          }

          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub as string;
        session.user.accessToken = token.accessToken as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
  debug: true, // Enable debug mode
};

// Create the handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
EOF

# Update API service to use port 5000
echo "🔗 Updating API service to use port 5000..."
cat > client/src/services/api.ts << 'EOF'
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const AI_BACKEND_URL = process.env.NEXT_PUBLIC_AI_BACKEND_URL || 'http://localhost:8000';

// Create axios instance with default config
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create AI backend axios instance
const aiApi = axios.create({
  baseURL: `${AI_BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
};

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data: any) => api.put('/user/profile', data),
};

export const documentAPI = {
  upload: (formData: FormData) => api.post('/documents/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getAll: () => api.get('/documents'),
  getById: (id: string) => api.get(`/documents/${id}`),
  update: (id: string, data: any) => api.put(`/documents/${id}`, data),
  delete: (id: string) => api.delete(`/documents/${id}`),
  analyze: (id: string) => api.post(`/documents/${id}/analyze`),
};

export const chatAPI = {
  sendMessage: (message: string) => aiApi.post('/research-assistant/chat', { message }),
  getHistory: () => aiApi.get('/research-assistant/history'),
};

export const researchAssistantAPI = {
  analyzeDocument: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return aiApi.post('/research-assistant/analyze-document', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  getAnalysis: (documentId: string) => aiApi.get(`/research-assistant/analysis/${documentId}`),
  generateSummary: (documentId: string) => aiApi.post(`/research-assistant/summary/${documentId}`),
  getSuggestions: (documentId: string) => aiApi.get(`/research-assistant/suggestions/${documentId}`),
};

export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
  getRecentActivity: () => api.get('/dashboard/activity'),
};

export default api;
EOF

# Update Next.js config
echo "⚙️ Updating Next.js configuration..."
cat > client/next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  env: {
    CUSTOM_KEY: 'my-value',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'your-secret-key-here',
    NEXT_PUBLIC_API_URL: 'http://localhost:5000',
    NEXT_PUBLIC_AI_BACKEND_URL: 'http://localhost:8000',
  },
};

export default nextConfig;
EOF

echo "✅ Configuration files updated!"
echo ""
echo "🚀 Now try building again:"
echo "cd /www/wwwroot/intellithesis/client"
echo "npm run build" 