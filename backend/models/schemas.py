from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum

class AnalysisType(str, Enum):
    GENERAL = "general"
    COMPREHENSIVE = "comprehensive"
    CITATION = "citation"
    STRUCTURE = "structure"
    WRITING_QUALITY = "writing_quality"
    RESEARCH_GAPS = "research_gaps"

class DocumentType(str, Enum):
    PDF = "pdf"
    DOC = "doc"
    DOCX = "docx"
    TXT = "txt"

class DocumentAnalysisRequest(BaseModel):
    document_id: str = Field(..., description="Unique identifier for the document")
    user_id: str = Field(..., description="User ID requesting the analysis")
    document_content: str = Field(..., description="Content of the document to analyze")
    document_type: DocumentType = Field(..., description="Type of document")
    analysis_type: AnalysisType = Field(..., description="Type of analysis to perform")

class AnalysisResult(BaseModel):
    summary: str = Field(..., description="Summary of the analysis")
    key_themes: List[str] = Field(default=[], description="Key themes identified")
    citations: List[str] = Field(default=[], description="Suggested citations")
    suggestions: List[str] = Field(default=[], description="Improvement suggestions")
    score: Optional[float] = Field(None, description="Quality score (0-100)")
    metadata: Dict[str, Any] = Field(default={}, description="Additional analysis metadata")

class DocumentAnalysisResponse(BaseModel):
    document_id: str = Field(..., description="Document ID")
    analysis_result: AnalysisResult = Field(..., description="Analysis results")
    status: str = Field(..., description="Analysis status")
    timestamp: datetime = Field(..., description="When the analysis was completed")

class ChatRequest(BaseModel):
    message: str = Field(..., description="User's message")
    user_id: str = Field(..., description="User ID")
    context: Optional[str] = Field(None, description="Additional context for the AI")
    document_id: Optional[str] = Field(None, description="Related document ID")

class ChatResponse(BaseModel):
    response: str = Field(..., description="AI's response")
    timestamp: datetime = Field(..., description="When the response was generated")
    confidence: Optional[float] = Field(None, description="AI confidence score")

class UserProfile(BaseModel):
    user_id: str = Field(..., description="User ID")
    email: str = Field(..., description="User email")
    first_name: str = Field(..., description="User's first name")
    last_name: str = Field(..., description="User's last name")
    role: str = Field(..., description="User role")
    institution: Optional[str] = Field(None, description="User's institution")
    department: Optional[str] = Field(None, description="User's department")
    research_interests: List[str] = Field(default=[], description="Research interests")

class DocumentMetadata(BaseModel):
    document_id: str = Field(..., description="Document ID")
    title: str = Field(..., description="Document title")
    filename: str = Field(..., description="Original filename")
    file_size: int = Field(..., description="File size in bytes")
    file_type: str = Field(..., description="File type")
    upload_date: datetime = Field(..., description="Upload date")
    status: str = Field(..., description="Processing status")
    category: str = Field(..., description="Document category")
    tags: List[str] = Field(default=[], description="Document tags")

class AnalysisHistory(BaseModel):
    analysis_id: str = Field(..., description="Analysis ID")
    document_id: str = Field(..., description="Document ID")
    user_id: str = Field(..., description="User ID")
    analysis_type: AnalysisType = Field(..., description="Type of analysis performed")
    result: AnalysisResult = Field(..., description="Analysis results")
    created_at: datetime = Field(..., description="When analysis was created")
    status: str = Field(..., description="Analysis status")

class ChatHistory(BaseModel):
    chat_id: str = Field(..., description="Chat message ID")
    user_id: str = Field(..., description="User ID")
    message: str = Field(..., description="User's message")
    response: str = Field(..., description="AI's response")
    timestamp: datetime = Field(..., description="When the chat occurred")
    context: Optional[str] = Field(None, description="Chat context")

class ErrorResponse(BaseModel):
    error: str = Field(..., description="Error message")
    detail: Optional[str] = Field(None, description="Detailed error information")
    timestamp: datetime = Field(..., description="When the error occurred")

class HealthCheck(BaseModel):
    status: str = Field(..., description="Service status")
    timestamp: datetime = Field(..., description="Health check timestamp")
    services: Dict[str, str] = Field(..., description="Service availability")

class UploadResponse(BaseModel):
    document_id: str = Field(..., description="Uploaded document ID")
    filename: str = Field(..., description="Original filename")
    analysis: AnalysisResult = Field(..., description="Initial analysis results")
    status: str = Field(..., description="Upload status") 