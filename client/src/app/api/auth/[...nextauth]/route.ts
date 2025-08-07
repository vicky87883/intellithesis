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
          const response = await fetch('https://intellithesis.com/api/auth/login', {
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
        token.userId = user.id; // Store the user ID
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.userId as string; // Use the stored user ID
        session.user.accessToken = token.accessToken as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Force all redirects to use the production domain
      const productionUrl = 'https://intellithesis.com';
      
      // If the URL is relative, prepend the production domain
      if (url.startsWith('/')) {
        return `${productionUrl}${url}`;
      }
      
      // If the URL is from the same origin, use it
      if (url.startsWith(productionUrl)) {
        return url;
      }
      
      // For any other URL, redirect to the home page
      return productionUrl;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/',
  },
  secret: process.env.NEXTAUTH_SECRET || 'intellithesis_nextauth_secret_2024_production',
  debug: false, // Disable debug in production
};

// Create the handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };