from pydantic import BaseModel
from typing import Optional, Dict, Any
from datetime import datetime

class DocumentCreate(BaseModel):
    title: str
    description: Optional[str] = None
    fileName: str
    originalName: str
    filePath: str
    fileSize: int
    mimeType: str
    userId: str
    status: str = "processing"
    analysisResult: Optional[Dict[str, Any]] = None
    tags: Optional[list] = []

class DocumentResponse(BaseModel):
    id: str
    title: str
    description: Optional[str] = None
    fileName: str
    originalName: str
    filePath: str
    fileSize: int
    mimeType: str
    userId: str
    status: str
    analysisResult: Optional[Dict[str, Any]] = None
    tags: Optional[list] = []
    createdAt: datetime
    updatedAt: datetime

    class Config:
        from_attributes = True 