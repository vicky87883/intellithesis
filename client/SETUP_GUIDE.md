# IntelliThesis Research Platform - Setup Guide

## 🚀 **Quick Start**

### **1. Environment Setup**

Create a `.env.local` file in the `client` directory:

```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-change-in-production
NEXTAUTH_URL=http://localhost:3004

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5004
```

### **2. Start the Backend Server**

```bash
cd server
npm install
npm run dev
```

The server will start on `http://localhost:5004`

### **3. Start the Frontend Client**

```bash
cd client
npm install
npm run dev
```

The client will start on `http://localhost:3004`

## ✅ **Verification Steps**

### **1. Test Backend API**
```bash
# Test health endpoint
curl http://localhost:5004/health

# Test registration
curl -X POST http://localhost:5004/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"1234567890","password":"test12345"}'

# Test login
curl -X POST http://localhost:5004/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test12345"}'
```

### **2. Test Frontend Pages**
- **Landing Page**: http://localhost:3004
- **Stream Pages**: http://localhost:3004/streams/computer-science
- **Sign Up**: http://localhost:3004/auth/signup
- **Sign In**: http://localhost:3004/auth/signin
- **Dashboard**: http://localhost:3004/dashboard (requires authentication)

## 🔧 **Features Working**

### **✅ Authentication System**
- ✅ User registration with validation
- ✅ User login with JWT tokens
- ✅ Session management with NextAuth
- ✅ Protected routes and redirects
- ✅ User profile display in navbar

### **✅ Landing Page**
- ✅ Modern hero section with CTA
- ✅ Research streams grid (5 academic disciplines)
- ✅ Search functionality
- ✅ Dark mode toggle
- ✅ Responsive design

### **✅ Dynamic Stream Pages**
- ✅ Individual stream pages (`/streams/[streamSlug]`)
- ✅ Stream details and research areas
- ✅ Featured research topics
- ✅ Call-to-action buttons
- ✅ SEO optimized

### **✅ Dashboard**
- ✅ User-specific welcome message
- ✅ Statistics cards
- ✅ Recent activity timeline
- ✅ Quick action buttons
- ✅ Protected access

### **✅ Navigation**
- ✅ Shared navbar with auth state
- ✅ Dark mode toggle
- ✅ User profile dropdown
- ✅ Responsive mobile menu

## 📊 **Test Data**

### **Available Research Streams**
1. **Computer Science** - `/streams/computer-science`
2. **Physics** - `/streams/physics`
3. **Chemistry** - `/streams/chemistry`
4. **Artificial Intelligence** - `/streams/artificial-intelligence`
5. **Psychology** - `/streams/psychology`

### **Test User Credentials**
```
Email: test2@example.com
Password: test12345
```

## 🐛 **Known Issues Fixed**

### **✅ Next.js App Router**
- Fixed async/await for dynamic route parameters
- Updated `params` handling in stream pages

### **✅ Authentication Validation**
- Added phone number field (required: 10-20 characters)
- Increased password minimum to 8 characters
- Updated registration API to include phone field

### **✅ NextAuth Configuration**
- Added proper environment variables
- Fixed session management
- Resolved JWT token handling

## 🎯 **Next Steps**

### **For Production Deployment**
1. **Environment Variables**: Update all secrets for production
2. **Database**: Configure production database
3. **SSL**: Enable HTTPS
4. **Monitoring**: Add error tracking and analytics
5. **CDN**: Configure content delivery network

### **For Development**
1. **Testing**: Add unit and integration tests
2. **Documentation**: Expand API documentation
3. **Features**: Add more research streams and topics
4. **UI/UX**: Enhance animations and interactions

## 📁 **Project Structure**

```
intellithesis-1/
├── client/                 # Next.js frontend
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   └── types/         # TypeScript types
│   └── .env.local         # Environment variables
├── server/                # Express.js backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   └── models/        # Database models
│   └── .env               # Server environment
└── README.md              # Project documentation
```

## 🔐 **Security Notes**

- **JWT Tokens**: Stored in HTTPOnly cookies
- **Password Hashing**: Handled by backend
- **Input Validation**: Both client and server-side
- **CORS**: Configured for development
- **Rate Limiting**: Enabled on backend

## 🚀 **Performance**

- **Next.js**: App Router with server components
- **Image Optimization**: Automatic with `next/image`
- **Code Splitting**: Automatic with Next.js
- **CSS**: Tailwind with purged unused styles
- **Caching**: Built-in Next.js caching

---

**The IntelliThesis research platform is now fully functional and ready for development and testing!** 🎉 