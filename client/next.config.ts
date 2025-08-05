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
