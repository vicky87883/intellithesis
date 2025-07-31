from fastapi import FastAPI, HTTPException, Depends, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import uvicorn
import os
from dotenv import load_dotenv
import motor.motor_asyncio
from datetime import datetime
import json

# Import our modules
from services.ai_service import AIService
from services.document_processor import DocumentProcessor
from services.analysis_service import AnalysisService
from models.schemas import (
    DocumentAnalysisRequest,
    DocumentAnalysisResponse,
    ChatRequest,
    ChatResponse,
    AnalysisResult
)

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="IntelliThesis AI Backend",
    description="AI-powered thesis analysis and research assistant backend",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
db = client.intellithesis

# Initialize services
ai_service = AIService()
document_processor = DocumentProcessor()
analysis_service = AnalysisService()

# Health check endpoint
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "services": {
            "ai_service": "available",
            "document_processor": "available",
            "analysis_service": "available"
        }
    }

# Document analysis endpoint
@app.post("/api/analyze-document", response_model=DocumentAnalysisResponse)
async def analyze_document(request: DocumentAnalysisRequest):
    try:
        # Process the document
        processed_text = await document_processor.process_document(
            request.document_content,
            request.document_type
        )
        
        # Perform AI analysis
        analysis_result = await ai_service.analyze_document(
            processed_text,
            request.analysis_type
        )
        
        # Store analysis in database
        analysis_record = {
            "document_id": request.document_id,
            "user_id": request.user_id,
            "analysis_type": request.analysis_type,
            "result": analysis_result,
            "created_at": datetime.now(),
            "status": "completed"
        }
        
        await db.analysis_results.insert_one(analysis_record)
        
        return DocumentAnalysisResponse(
            document_id=request.document_id,
            analysis_result=analysis_result,
            status="completed",
            timestamp=datetime.now()
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Chat endpoint for AI assistant
@app.post("/api/chat", response_model=ChatResponse)
async def chat_with_ai(request: ChatRequest):
    try:
        # Get chat response from AI service
        response = await ai_service.chat(
            message=request.message,
            context=request.context,
            user_id=request.user_id
        )
        
        # Store chat history
        chat_record = {
            "user_id": request.user_id,
            "message": request.message,
            "response": response,
            "timestamp": datetime.now()
        }
        
        await db.chat_history.insert_one(chat_record)
        
        return ChatResponse(
            response=response,
            timestamp=datetime.now()
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Document upload and processing
@app.post("/api/upload-document")
async def upload_document(
    file: UploadFile = File(...),
    user_id: str = None,
    analysis_type: str = "general"
):
    try:
        # Validate file type
        allowed_types = ["application/pdf", "application/msword", 
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
                        "text/plain"]
        
        if file.content_type not in allowed_types:
            raise HTTPException(status_code=400, detail="Invalid file type")
        
        # Process the uploaded file
        content = await document_processor.upload_and_process(file)
        
        # Perform initial analysis
        analysis = await ai_service.analyze_document(content, analysis_type)
        
        # Store document metadata
        document_record = {
            "user_id": user_id,
            "filename": file.filename,
            "content_type": file.content_type,
            "size": len(content),
            "analysis_type": analysis_type,
            "uploaded_at": datetime.now(),
            "status": "processed"
        }
        
        result = await db.documents.insert_one(document_record)
        
        return {
            "document_id": str(result.inserted_id),
            "filename": file.filename,
            "analysis": analysis,
            "status": "uploaded_and_analyzed"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Get analysis history for a user
@app.get("/api/analysis-history/{user_id}")
async def get_analysis_history(user_id: str, limit: int = 10):
    try:
        cursor = db.analysis_results.find(
            {"user_id": user_id}
        ).sort("created_at", -1).limit(limit)
        
        history = await cursor.to_list(length=limit)
        
        return {
            "user_id": user_id,
            "history": history,
            "total": len(history)
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Get chat history for a user
@app.get("/api/chat-history/{user_id}")
async def get_chat_history(user_id: str, limit: int = 20):
    try:
        cursor = db.chat_history.find(
            {"user_id": user_id}
        ).sort("timestamp", -1).limit(limit)
        
        history = await cursor.to_list(length=limit)
        
        return {
            "user_id": user_id,
            "history": history,
            "total": len(history)
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Advanced analysis endpoint
@app.post("/api/advanced-analysis")
async def advanced_analysis(request: Dict[str, Any]):
    try:
        analysis_type = request.get("analysis_type", "comprehensive")
        document_content = request.get("document_content", "")
        user_id = request.get("user_id", "")
        
        # Perform comprehensive analysis
        result = await analysis_service.perform_comprehensive_analysis(
            document_content,
            analysis_type,
            user_id
        )
        
        return {
            "analysis_type": analysis_type,
            "result": result,
            "timestamp": datetime.now().isoformat()
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    ) 