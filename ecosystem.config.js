module.exports = {
  apps: [
    {
      name: 'intellithesis-frontend',
      cwd: '/www/wwwroot/intellithesis/client',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_API_URL: 'https://intellithesis.com/api',
        NEXT_PUBLIC_AI_BACKEND_URL: 'https://intellithesis.com/ai'
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/www/wwwroot/intellithesis/logs/frontend-error.log',
      out_file: '/www/wwwroot/intellithesis/logs/frontend-out.log',
      log_file: '/www/wwwroot/intellithesis/logs/frontend-combined.log',
      time: true
    },
    {
      name: 'intellithesis-backend',
      cwd: '/www/wwwroot/intellithesis/server',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
        DB_HOST: 'localhost',
        DB_PORT: '5432',
        DB_USER: 'postgres',
        DB_PASSWORD: 'postgres',
        DB_NAME: 'intellithesis_prod',
        JWT_SECRET: 'intellithesis_jwt_secret_2024',
        CLIENT_URL: 'https://intellithesis.com'
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/www/wwwroot/intellithesis/logs/backend-error.log',
      out_file: '/www/wwwroot/intellithesis/logs/backend-out.log',
      log_file: '/www/wwwroot/intellithesis/logs/backend-combined.log',
      time: true
    },
    {
      name: 'intellithesis-ai',
      cwd: '/www/wwwroot/intellithesis/backend',
      script: '/bin/bash',
      args: '-c "source .venv/bin/activate && python3 main.py"',
      env: {
        GROQ_API_KEY: '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',
        DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/intellithesis_prod',
        SECRET_KEY: 'intellithesis_jwt_secret_2024',
        ALGORITHM: 'HS256',
        ACCESS_TOKEN_EXPIRE_MINUTES: '30',
        UPLOAD_DIR: 'uploads',
        MAX_FILE_SIZE: '10485760',
        ALLOWED_EXTENSIONS: '["pdf", "jpg", "jpeg", "png", "txt", "doc", "docx"]',
        REDIS_URL: 'redis://localhost:6379',
        ALLOWED_ORIGINS: '["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003", "http://localhost:3004", "http://localhost:5006", "https://intellithesis.com"]'
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/www/wwwroot/intellithesis/logs/ai-error.log',
      out_file: '/www/wwwroot/intellithesis/logs/ai-out.log',
      log_file: '/www/wwwroot/intellithesis/logs/ai-combined.log',
      time: true
    }
  ]
};