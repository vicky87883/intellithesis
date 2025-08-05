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
        DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/intellithesis_prod',
        JWT_SECRET: 'intellithesis_jwt_secret_2024'
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
      args: '-c "source .venv/bin/activate && export GROQ_API_KEY=$GROQ_API_KEY && python3 main.py"',
      env: {
        GROQ_API_KEY: 'your_groq_api_key_here',
        DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/intellithesis_prod',
        JWT_SECRET: 'intellithesis_jwt_secret_2024'
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