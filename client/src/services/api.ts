import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
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