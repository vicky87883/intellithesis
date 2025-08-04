from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ChatMessageBase(BaseModel):
    content: str
    file_path: Optional[str] = None
    file_type: Optional[str] = None

class ChatMessageCreate(ChatMessageBase):
    session_id: int
    role: str  # "user" or "assistant"

class ChatMessageResponse(ChatMessageBase):
    id: int
    session_id: int
    role: str
    created_at: datetime
    
    class Config:
        from_attributes = True

class ChatSessionBase(BaseModel):
    title: Optional[str] = None

class ChatSessionCreate(ChatSessionBase):
    user_id: str

class ChatSessionResponse(ChatSessionBase):
    id: int
    user_id: str
    created_at: datetime
    updated_at: Optional[datetime] = None
    is_active: bool
    messages: List[ChatMessageResponse] = []
    
    class Config:
        from_attributes = True

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[int] = None
    file_path: Optional[str] = None
    file_type: Optional[str] = None

class ChatResponse(BaseModel):
    message: str
    session_id: int
    timestamp: datetime

class FileUploadResponse(BaseModel):
    filename: str
    file_path: str
    file_type: str
    file_size: int
    content_summary: Optional[str] = None
    image_caption: Optional[str] = None 