import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
    NEXT_PUBLIC_API_URL: 'http://localhost:5001',
    NEXT_PUBLIC_AI_BACKEND_URL: 'http://localhost:8000',
  },
};

export default nextConfig;
