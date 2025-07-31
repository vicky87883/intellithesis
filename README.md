# IntelliThesis - AI-Powered Thesis Assistant
Live URL-https://intellithesis.com/
A comprehensive AI-powered thesis writing and research assistant built with modern technologies including Next.js, Express.js, FastAPI, and MongoDB.

## 🏗️ Architecture

### **MERN Stack + Python AI Backend**

- **Client**: Next.js 14 with TypeScript and Tailwind CSS
- **Server**: Express.js with MongoDB for authentication and user management
- **Backend**: Python FastAPI with LLM integration for AI analysis
- **Database**: MongoDB for data persistence

## 📁 Project Structure

```
intellithesis-1/
├── client/                 # Next.js frontend
│   ├── src/
│   │   ├── app/           # App router pages
│   │   │   ├── page.tsx   # Homepage
│   │   │   ├── dashboard/ # Dashboard page
│   │   │   ├── chat/      # AI chat interface
│   │   │   └── upload/    # Document upload
│   │   └── components/    # Reusable components
│   ├── package.json
│   └── README.md
├── server/                 # Express.js authentication server
│   ├── src/
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Auth middleware
│   │   └── index.ts       # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── backend/               # Python FastAPI AI backend
│   ├── services/          # AI services
│   ├── models/           # Pydantic schemas
│   ├── main.py           # FastAPI app
│   └── requirements.txt
└── README.md
```

## 🚀 Features

### **Client (Next.js Frontend)**
- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Interactive dashboard with analytics
- ✅ Real-time AI chat interface
- ✅ Drag-and-drop document upload
- ✅ Smooth animations with Framer Motion
- ✅ TypeScript for type safety

### **Server (Express.js Authentication)**
- ✅ User registration and authentication
- ✅ JWT token management
- ✅ MongoDB integration
- ✅ Document management API
- ✅ File upload handling
- ✅ Role-based access control

### **Backend (Python AI Services)**
- ✅ OpenAI GPT-4 integration
- ✅ Document analysis and processing
- ✅ Citation detection and suggestions
- ✅ Writing quality assessment
- ✅ Research gap identification
- ✅ Comprehensive analytics

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

### **Server**
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **Validation**: express-validator
- **File Upload**: Multer

### **Backend**
- **Framework**: FastAPI
- **Language**: Python 3.9+
- **AI/ML**: OpenAI GPT-4, LangChain
- **Document Processing**: PyPDF2, python-docx
- **NLP**: NLTK, spaCy
- **Database**: MongoDB with Motor (async)

## 📋 Prerequisites

- Node.js 18+
- Python 3.9+
- MongoDB 5.0+
- OpenAI API key

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd intellithesis-1
```

### 2. Set Up Environment Variables

**Client (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_AI_BACKEND_URL=http://localhost:8000
```

**Server (.env)**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/intellithesis
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
```

**Backend (.env)**
```env
OPENAI_API_KEY=your-openai-api-key
MONGODB_URL=mongodb://localhost:27017
```

### 3. Install Dependencies

**Client**
```bash
cd client
npm install
```

**Server**
```bash
cd server
npm install
```

**Backend**
```bash
cd backend
pip install -r requirements.txt
```

### 4. Start MongoDB
```bash
# Start MongoDB service
mongod
```

### 5. Run the Application

**Terminal 1 - Client**
```bash
cd client
npm run dev
# http://localhost:3000
```

**Terminal 2 - Server**
```bash
cd server
npm run dev
# http://localhost:5000
```

**Terminal 3 - Backend**
```bash
cd backend
python main.py
# http://localhost:8000
```

## 📱 Available Pages

### **Client Routes**
- `/` - Homepage with hero section and features
- `/dashboard` - Main application dashboard
- `/chat` - AI assistant chat interface
- `/upload` - Document upload and analysis

### **Server API Endpoints**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/document/upload` - Upload document
- `GET /api/document/my-documents` - Get user documents

### **Backend API Endpoints**
- `POST /api/analyze-document` - Document analysis
- `POST /api/chat` - AI chat
- `POST /api/upload-document` - Document upload
- `GET /api/analysis-history/{user_id}` - Analysis history
- `GET /api/chat-history/{user_id}` - Chat history

## 🔧 Development

### **Client Development**
```bash
cd client
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

### **Server Development**
```bash
cd server
npm run dev          # Start development server
npm run build        # Build TypeScript
npm run start        # Start production server
```

### **Backend Development**
```bash
cd backend
python main.py       # Start FastAPI server
# Or with uvicorn
uvicorn main:app --reload
```

## 🧪 Testing

### **Client Tests**
```bash
cd client
npm test
```

### **Server Tests**
```bash
cd server
npm test
```

### **Backend Tests**
```bash
cd backend
pytest
```

## 📊 Database Schema

### **Users Collection**
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: String (student/researcher/admin),
  institution: String,
  department: String,
  researchInterests: [String],
  profilePicture: String,
  isEmailVerified: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### **Documents Collection**
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  fileName: String,
  originalName: String,
  fileSize: Number,
  fileType: String,
  filePath: String,
  userId: ObjectId,
  status: String,
  aiInsights: {
    summary: String,
    keyThemes: [String],
    citations: [String],
    suggestions: [String],
    analysisDate: Date
  },
  tags: [String],
  category: String,
  isPublic: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation and sanitization
- File upload security
- Role-based access control

## 🤖 AI Features

### **Document Analysis**
- Content summarization
- Key theme identification
- Citation suggestions
- Writing quality assessment
- Research gap identification
- Structure analysis

### **AI Chat Assistant**
- Context-aware responses
- Research guidance
- Writing suggestions
- Citation help
- Methodology advice

### **Advanced Analytics**
- Readability scores
- Vocabulary analysis
- Sentence structure analysis
- Citation density analysis
- Overall quality scoring

## 🚀 Deployment

### **Client (Vercel)**
```bash
cd client
npm run build
# Deploy to Vercel
```

### **Server (Railway/Heroku)**
```bash
cd server
npm run build
# Deploy to Railway or Heroku
```

### **Backend (Railway/Heroku)**
```bash
cd backend
# Deploy to Railway or Heroku
```

## 📈 Performance

- **Client**: Optimized with Next.js 14 features
- **Server**: Efficient MongoDB queries with indexing
- **Backend**: Async FastAPI with connection pooling
- **Database**: MongoDB with proper indexing

## 🔧 Configuration

### **Environment Variables**
See the `.env.example` files in each directory for required environment variables.

### **MongoDB Setup**
1. Install MongoDB
2. Create database: `intellithesis`
3. Set up indexes for performance

### **OpenAI Setup**
1. Get OpenAI API key
2. Add to backend `.env` file
3. Configure model settings in `ai_service.py`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Contact the development team

---

**Built with ❤️ for academic research and thesis writing** 
