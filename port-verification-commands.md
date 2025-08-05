# 🔍 Port Verification Commands

## **Step 1: Check Which Ports Are Listening**

```bash
# Check all listening ports
sudo netstat -tlnp | grep -E ':(3000|5000|8000)'

# Alternative using ss command
sudo ss -tlnp | grep -E ':(3000|5000|8000)'

# Check specific ports
sudo lsof -i :3000
sudo lsof -i :5000
sudo lsof -i :8000
```

## **Step 2: Test Direct Local Access**

```bash
# Test frontend (port 3000)
curl -I http://localhost:3000

# Test backend API (port 5000)
curl -I http://localhost:5000/health

# Test AI backend (port 8000)
curl -I http://localhost:8000/health
```

## **Step 3: Test Domain Access**

```bash
# Test main domain
curl -I https://intellithesis.com

# Test API proxy
curl -I https://intellithesis.com/api/health

# Test AI proxy
curl -I https://intellithesis.com/ai/health
```

## **Step 4: Check PM2 Logs for Errors**

```bash
# View all PM2 logs
pm2 logs

# View specific process logs
pm2 logs intellithesis-frontend
pm2 logs intellithesis-backend
pm2 logs intellithesis-ai

# View recent logs only
pm2 logs --lines 50
```

## **Step 5: Monitor Real-time Performance**

```bash
# Monitor PM2 processes
pm2 monit

# Check system resources
htop

# Monitor network connections
sudo netstat -tulpn | grep -E ':(3000|5000|8000)'
```

## **Expected Results:**

### **Port Check:**
```bash
# Should show something like:
tcp6       0      0 :::3000                 :::*                    LISTEN      1234/node
tcp6       0      0 :::5000                 :::*                    LISTEN      5678/node
tcp6       0      0 :::8000                 :::*                    LISTEN      9012/python
```

### **Direct Access Test:**
```bash
# Frontend should return:
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

# Backend should return:
HTTP/1.1 200 OK
Content-Type: application/json

# AI should return:
HTTP/1.1 200 OK
Content-Type: application/json
```

### **Domain Test:**
```bash
# Should return 200 OK for all endpoints
curl -I https://intellithesis.com
curl -I https://intellithesis.com/api/health
curl -I https://intellithesis.com/ai/health
```

## **🔧 Troubleshooting Commands:**

```bash
# If ports aren't listening, check PM2 logs
pm2 logs --err

# Kill any conflicting processes
sudo pkill -f "node.*3000"
sudo pkill -f "node.*5000"
sudo pkill -f "python.*8000"

# Restart specific service if needed
pm2 restart intellithesis-frontend
pm2 restart intellithesis-backend
pm2 restart intellithesis-ai

# Check if processes are actually running
ps aux | grep -E "(node|python)" | grep -v grep
```

## **✅ Success Indicators:**

1. **All PM2 processes show "online" status** ✅
2. **Ports 3000, 5000, 8000 are listening** ✅
3. **Direct local access works** ✅
4. **Domain access works** ✅
5. **No errors in PM2 logs** ✅

Run these commands to verify everything is working correctly! 