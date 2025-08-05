#!/bin/bash

# IntelliThesis Production Build Script
# Run this script on your Ubuntu server to build the application

echo "🚀 Starting IntelliThesis Production Build..."

# Navigate to the project directory
cd /www/wwwroot/intellithesis

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Build the client
echo "🏗️ Building Next.js client..."
cd client
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Client build successful!"
else
    echo "❌ Client build failed!"
    exit 1
fi

# Build the server
echo "🏗️ Building Express.js server..."
cd ../server
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Server build successful!"
else
    echo "❌ Server build failed!"
    exit 1
fi

echo "🎉 All builds completed successfully!"
echo "📁 Build outputs:"
echo "   - Client: /www/wwwroot/intellithesis/client/.next"
echo "   - Server: /www/wwwroot/intellithesis/server/dist"

echo ""
echo "🚀 Ready to start the application with PM2!"
echo "Run: pm2 start ecosystem.config.js" 