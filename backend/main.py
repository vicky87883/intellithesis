from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
import uvicorn
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv

# Import routers
from api.routes import auth, research_assistant, documents, users
from core.config import settings
from core.database import engine, Base

# Import models to ensure they're registered
from models.user import User
from models.chat import ChatSession, ChatMessage

# Load environment variables
load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("🚀 Starting IntelliThesis Research Assistant API...")
    
    # Create database tables
    Base.metadata.create_all(bind=engine)
    print("✅ Database tables created successfully")
    
    yield
    
    # Shutdown
    print("🛑 Shutting down IntelliThesis Research Assistant API...")

# Create FastAPI app
app = FastAPI(
    title="IntelliThesis Research Assistant API",
    description="AI-powered research assistant for academic research",
    version="1.0.0",
    lifespan=lifespan
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3004",
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:5006"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files for uploaded files
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(research_assistant.router, prefix="/api/research-assistant", tags=["Research Assistant"])
app.include_router(documents.router, prefix="/api/documents", tags=["Documents"])
app.include_router(users.router, prefix="/api/users", tags=["Users"])

@app.get("/")
async def root():
    return {
        "message": "IntelliThesis Research Assistant API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "IntelliThesis Research Assistant API",
        "timestamp": "2024-01-01T00:00:00Z"
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    ) 