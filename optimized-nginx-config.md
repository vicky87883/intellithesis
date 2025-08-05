# 🎯 Optimized Nginx Configuration for intellithesis.com

## **Current Configuration Analysis:**
Your current config is good but needs optimization for:
1. ✅ SSL is properly configured
2. ✅ Proxy to port 3000 (frontend) is set
3. ❌ Missing API proxy routes
4. ❌ Missing Next.js static file handling
5. ❌ Missing proper caching headers

## **Optimized Configuration:**

```nginx
server
{
    listen 80;
    listen 443 ssl;
    server_name intellithesis.com www.intellithesis.com;
    index index.html index.htm default.htm default.html;
    
    #SSL-START SSL related configuration
    ssl_certificate    /www/server/panel/vhost/cert/intellithesis/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/intellithesis/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;
    #SSL-END
    
    #ERROR-PAGE-START  Error page related configuration
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END
    
    #REWRITE-START Pseudo-static related configuration
    include /www/server/panel/vhost/rewrite/node_intellithesis.conf;
    #REWRITE-END
    
    #Files or directories forbidden to access
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md|package.json|package-lock.json|\.env|node_modules) {
        return 404;
    }
    
    #One-click application for SSL certificate verification directory related settings
    location /.well-known/ {
        root  /www/wwwroot/intellithesis/client/;
    }

    # HTTP reverse proxy related settings begin >>>
    location ~ /purge(/.*) {
        proxy_cache_purge cache_one $host$request_uri$is_args$args;
    }

    # API Proxy to Express Backend (Port 5001)
    location /api/ {
        proxy_pass http://127.0.0.1:5001/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;

        proxy_connect_timeout 30s;
        proxy_read_timeout 86400s;
        proxy_send_timeout 30s;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # AI API Proxy to FastAPI Backend (Port 8000)
    location /ai/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;

        proxy_connect_timeout 30s;
        proxy_read_timeout 86400s;
        proxy_send_timeout 30s;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Next.js Static Files (with caching)
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        
        # Cache static files for 1 year
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header X-Cache $upstream_cache_status;
    }

    # Main Frontend Proxy (Next.js)
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;

        proxy_connect_timeout 30s;
        proxy_read_timeout 86400s;
        proxy_send_timeout 30s;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    # End of HTTP reverse proxy related settings <<<
    
    access_log  /www/wwwlogs/intellithesis.log;
    error_log  /www/wwwlogs/intellithesis.error.log;
}
```

## **🔧 Implementation Steps:**

### **Step 1: Update Nginx Configuration**
1. In aaPanel, go to **Website** → **intellithesis.com**
2. Click **Settings** → **Configuration File**
3. Replace the entire configuration with the optimized version above
4. Click **Save**

### **Step 2: Test Configuration**
```bash
# Test Nginx configuration
sudo nginx -t

# If successful, reload Nginx
sudo systemctl reload nginx
```

### **Step 3: Verify All Services Are Running**
```bash
# Check if all services are running
pm2 status

# If not running, start them
cd /var/www/intellithesis
pm2 start ecosystem.config.js
pm2 save
```

### **Step 4: Test All Endpoints**
```bash
# Test frontend
curl -I https://intellithesis.com

# Test API proxy
curl -I https://intellithesis.com/api/health

# Test AI proxy
curl -I https://intellithesis.com/ai/health

# Test static files
curl -I https://intellithesis.com/_next/static/
```

## **🎯 Key Improvements Made:**

1. **✅ Added API Proxy**: `/api/` → Express backend (port 5001)
2. **✅ Added AI Proxy**: `/ai/` → FastAPI backend (port 8000)
3. **✅ Optimized Static Files**: Better caching for `/_next/static/`
4. **✅ Added www subdomain**: `www.intellithesis.com`
5. **✅ Improved Headers**: Added `X-Forwarded-Proto` for proper HTTPS detection

## **🔍 Troubleshooting Commands:**

```bash
# Check if ports are listening
sudo netstat -tlnp | grep -E ':(3000|5001|8000)'

# Check PM2 processes
pm2 status
pm2 logs

# Check Nginx error logs
sudo tail -f /www/wwwlogs/intellithesis.error.log

# Test backend directly
curl http://localhost:5001/health
curl http://localhost:8000/health
```

## **✅ Expected Results:**

- **Frontend**: https://intellithesis.com ✅
- **API**: https://intellithesis.com/api/health ✅
- **AI**: https://intellithesis.com/ai/health ✅
- **Static Files**: https://intellithesis.com/_next/static/ ✅
- **SSL**: Working with proper HTTPS redirect ✅

Your configuration is now optimized for the complete IntelliThesis application stack! 