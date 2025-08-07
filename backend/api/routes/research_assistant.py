from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form, Body
from sqlalchemy.orm import Session
from typing import List, Optional
import json
from datetime import datetime
import os
import uuid
from pydantic import BaseModel

from core.database import get_db
from services.ai_service import AIService
from models.user import User
from models.chat import ChatSession, ChatMessage

router = APIRouter()
ai_service = AIService()

# Pydantic models for JSON requests
class ChatRequest(BaseModel):
    message: str
    user_id: str
    context: Optional[str] = ""
    session_id: Optional[str] = ""

class HistoryRequest(BaseModel):
    user_id: str

@router.post("/chat")
async def chat_with_assistant(
    message: str = Form(...),
    context: str = Form(""),
    user_id: str = Form(...),
    session_id: str = Form(""),
    db: Session = Depends(get_db)
):
    """Chat with the research assistant and store in database (Form data)"""
    return await _process_chat(message, context, user_id, session_id, db)

@router.post("/chat/json")
async def chat_with_assistant_json(
    request: ChatRequest = Body(...),
    db: Session = Depends(get_db)
):
    """Chat with the research assistant and store in database (JSON data)"""
    return await _process_chat(request.message, request.context, request.user_id, request.session_id, db)

async def _process_chat(message: str, context: str, user_id: str, session_id: str, db: Session):
    """Process chat request (shared logic)"""
    try:
        # Validate user exists
        user = db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Create or get chat session
        if not session_id:
            session = ChatSession(
                user_id=user_id,
                title=message[:50] + "..." if len(message) > 50 else message
            )
            db.add(session)
            db.commit()
            db.refresh(session)
            session_id = session.id
        else:
            session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
            if not session:
                raise HTTPException(status_code=404, detail="Chat session not found")
        
        # Store user message
        user_message = ChatMessage(
            session_id=session_id,
            role="user",
            content=message,
            message_type="text"
        )
        db.add(user_message)
        db.commit()
        
        # Get response from AI service
        response = ai_service.chat(message, context, user_id)
        
        # Store assistant response
        assistant_message = ChatMessage(
            session_id=session_id,
            role="assistant",
            content=response,
            message_type="text"
        )
        db.add(assistant_message)
        db.commit()
        
        return {
            "success": True,
            "response": response,
            "session_id": session_id,
            "timestamp": datetime.utcnow().isoformat(),
            "user_id": user_id
        }
        
    except Exception as e:
        print(f"Error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail=f"Chat failed: {str(e)}")

@router.get("/sessions/{user_id}")
async def get_user_sessions(
    user_id: str,
    db: Session = Depends(get_db)
):
    """Get all chat sessions for a user"""
    try:
        sessions = db.query(ChatSession).filter(
            ChatSession.user_id == user_id,
            ChatSession.is_active == True
        ).order_by(ChatSession.updated_at.desc()).all()
        
        return {
            "success": True,
            "sessions": [
                {
                    "id": session.id,
                    "title": session.title,
                    "created_at": session.created_at.isoformat() if session.created_at else None,
                    "updated_at": session.updated_at.isoformat() if session.updated_at else None,
                    "message_count": len(session.messages)
                }
                for session in sessions
            ]
        }
        
    except Exception as e:
        print(f"Error fetching sessions: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch sessions: {str(e)}")

@router.get("/history/{user_id}")
async def get_user_history(
    user_id: str,
    db: Session = Depends(get_db)
):
    """Get chat history for a user (alias for sessions)"""
    return await get_user_sessions(user_id, db)

@router.post("/history")
async def get_user_history_json(
    request: HistoryRequest = Body(...),
    db: Session = Depends(get_db)
):
    """Get chat history for a user (JSON request)"""
    return await get_user_sessions(request.user_id, db)

@router.get("/session/{session_id}/messages")
async def get_session_messages(
    session_id: str,
    db: Session = Depends(get_db)
):
    """Get all messages for a specific chat session"""
    try:
        session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
        if not session:
            raise HTTPException(status_code=404, detail="Session not found")
        
        messages = db.query(ChatMessage).filter(
            ChatMessage.session_id == session_id
        ).order_by(ChatMessage.created_at.asc()).all()
        
        return {
            "success": True,
            "session": {
                "id": session.id,
                "title": session.title,
                "created_at": session.created_at.isoformat() if session.created_at else None
            },
            "messages": [
                {
                    "id": msg.id,
                    "role": msg.role,
                    "content": msg.content,
                    "message_type": msg.message_type,
                    "file_name": msg.file_name,
                    "file_type": msg.file_type,
                    "voice_duration": msg.voice_duration,
                    "created_at": msg.created_at.isoformat() if msg.created_at else None
                }
                for msg in messages
            ]
        }
        
    except Exception as e:
        print(f"Error fetching messages: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch messages: {str(e)}")

@router.delete("/session/{session_id}")
async def delete_session(
    session_id: str,
    db: Session = Depends(get_db)
):
    """Delete a chat session"""
    try:
        session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
        if not session:
            raise HTTPException(status_code=404, detail="Session not found")
        
        session.is_active = False
        db.commit()
        
        return {
            "success": True,
            "message": "Session deleted successfully"
        }
        
    except Exception as e:
        print(f"Error deleting session: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to delete session: {str(e)}")

@router.post("/upload-document")
async def upload_and_analyze_document(
    file: UploadFile = File(...),
    user_id: str = Form(...),
    session_id: str = Form(""),
    document_type: str = Form("general"),
    db: Session = Depends(get_db)
):
    """Upload and analyze a document"""
    try:
        # Validate user exists
        user = db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Create or get chat session
        if not session_id:
            session = ChatSession(
                user_id=user_id,
                title=f"Document Analysis: {file.filename}"
            )
            db.add(session)
            db.commit()
            db.refresh(session)
            session_id = session.id
        else:
            session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
            if not session:
                raise HTTPException(status_code=404, detail="Chat session not found")
        
        # Validate file type
        allowed_types = ["application/pdf", "text/plain", "application/msword", 
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
        
        if file.content_type not in allowed_types:
            raise HTTPException(status_code=400, detail="Unsupported file type")
        
        # Read file content
        content = await file.read()
        
        # Save file
        upload_dir = "uploads"
        os.makedirs(upload_dir, exist_ok=True)
        file_path = os.path.join(upload_dir, f"{uuid.uuid4()}_{file.filename}")
        
        with open(file_path, "wb") as f:
            f.write(content)
        
        # Extract text based on file type
        if file.content_type == "application/pdf":
            text = ai_service.extract_text_from_pdf(content)
        elif file.content_type == "text/plain":
            text = content.decode('utf-8')
        else:
            text = f"Document: {file.filename} (Analysis not yet implemented for this file type)"
        
        # Analyze document
        analysis = ai_service.analyze_document(text, document_type)
        
        # Store file message
        file_message = ChatMessage(
            session_id=session_id,
            role="user",
            content=f"Uploaded document: {file.filename}",
            message_type="file",
            file_path=file_path,
            file_name=file.filename,
            file_type=file.content_type,
            file_size=len(content)
        )
        db.add(file_message)
        
        # Store analysis message
        analysis_content = f"📄 **{file.filename}** uploaded and analyzed!\n\n**Summary:** {analysis.get('summary', 'No summary available')}\n\n**Key Points:**\n{chr(10).join([f'• {point}' for point in analysis.get('key_points', [])])}\n\n**Suggestions:**\n{chr(10).join([f'• {suggestion}' for suggestion in analysis.get('suggestions', [])])}"
        
        analysis_message = ChatMessage(
            session_id=session_id,
            role="assistant",
            content=analysis_content,
            message_type="text"
        )
        db.add(analysis_message)
        db.commit()
        
        return {
            "success": True,
            "filename": file.filename,
            "file_size": len(content),
            "content_type": file.content_type,
            "analysis": analysis,
            "session_id": session_id,
            "timestamp": datetime.utcnow().isoformat(),
            "user_id": user_id
        }
        
    except Exception as e:
        print(f"Error in document upload: {e}")
        raise HTTPException(status_code=500, detail=f"Document analysis failed: {str(e)}")

@router.post("/upload-image")
async def upload_and_process_image(
    file: UploadFile = File(...),
    user_id: str = Form(...),
    session_id: str = Form(""),
    task: str = Form("describe"),
    db: Session = Depends(get_db)
):
    """Upload and process an image"""
    try:
        # Validate user exists
        user = db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Create or get chat session
        if not session_id:
            session = ChatSession(
                user_id=user_id,
                title=f"Image Analysis: {file.filename}"
            )
            db.add(session)
            db.commit()
            db.refresh(session)
            session_id = session.id
        else:
            session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
            if not session:
                raise HTTPException(status_code=404, detail="Chat session not found")
        
        # Validate file type
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Read file content
        content = await file.read()
        
        # Save file
        upload_dir = "uploads"
        os.makedirs(upload_dir, exist_ok=True)
        file_path = os.path.join(upload_dir, f"{uuid.uuid4()}_{file.filename}")
        
        with open(file_path, "wb") as f:
            f.write(content)
        
        # Process image
        result = ai_service.process_image(content, task)
        
        # Store image message
        image_message = ChatMessage(
            session_id=session_id,
            role="user",
            content=f"Uploaded image: {file.filename}",
            message_type="file",
            file_path=file_path,
            file_name=file.filename,
            file_type=file.content_type,
            file_size=len(content)
        )
        db.add(image_message)
        
        # Store result message
        result_message = ChatMessage(
            session_id=session_id,
            role="assistant",
            content=f"��️ **{file.filename}** uploaded!\n\n{result}",
            message_type="text"
        )
        db.add(result_message)
        db.commit()
        
        return {
            "success": True,
            "filename": file.filename,
            "file_size": len(content),
            "content_type": file.content_type,
            "result": result,
            "session_id": session_id,
            "timestamp": datetime.utcnow().isoformat(),
            "user_id": user_id
        }
        
    except Exception as e:
        print(f"Error in image upload: {e}")
        raise HTTPException(status_code=500, detail=f"Image processing failed: {str(e)}")

@router.post("/voice")
async def process_voice_message(
    audio_file: UploadFile = File(...),
    user_id: str = Form(...),
    session_id: str = Form(""),
    db: Session = Depends(get_db)
):
    """Process voice message and convert to text"""
    try:
        # Validate user exists
        user = db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Create or get chat session
        if not session_id:
            session = ChatSession(
                user_id=user_id,
                title="Voice Chat"
            )
            db.add(session)
            db.commit()
            db.refresh(session)
            session_id = session.id
        else:
            session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
            if not session:
                raise HTTPException(status_code=404, detail="Chat session not found")
        
        # Validate file type
        if not audio_file.content_type.startswith("audio/"):
            raise HTTPException(status_code=400, detail="File must be an audio file")
        
        # Read file content
        content = await audio_file.read()
        
        # Save file
        upload_dir = "uploads/voice"
        os.makedirs(upload_dir, exist_ok=True)
        file_path = os.path.join(upload_dir, f"{uuid.uuid4()}_{audio_file.filename}")
        
        with open(file_path, "wb") as f:
            f.write(content)
        
        # Convert speech to text (placeholder - you can integrate with Whisper API)
        transcribed_text = "Voice message transcribed (placeholder - integrate with Whisper API)"
        
        # Store voice message
        voice_message = ChatMessage(
            session_id=session_id,
            role="user",
            content=transcribed_text,
            message_type="voice",
            file_path=file_path,
            file_name=audio_file.filename,
            file_type=audio_file.content_type,
            file_size=len(content),
            voice_duration=30  # Placeholder duration
        )
        db.add(voice_message)
        db.commit()
        
        return {
            "success": True,
            "transcribed_text": transcribed_text,
            "session_id": session_id,
            "timestamp": datetime.utcnow().isoformat(),
            "user_id": user_id
        }
        
    except Exception as e:
        print(f"Error in voice processing: {e}")
        raise HTTPException(status_code=500, detail=f"Voice processing failed: {str(e)}")

@router.get("/health")
async def health_check():
    """Health check for the research assistant"""
    return {
        "status": "healthy",
        "service": "Research Assistant",
        "ai_service": "Groq (Llama3-70b-8192)",
        "features": ["chat", "file_upload", "voice", "database_storage"],
        "timestamp": datetime.utcnow().isoformat()
    }