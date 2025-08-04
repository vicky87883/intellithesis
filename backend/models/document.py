from sqlalchemy import Column, String, Text, Integer, DateTime, JSON, ARRAY
from sqlalchemy.sql import func
from core.database import Base
from datetime import datetime

class Document(Base):
    __tablename__ = "documents"
    
    id = Column(String, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    fileName = Column(String(255), nullable=False)
    originalName = Column(String(255), nullable=False)
    filePath = Column(String(500), nullable=False)
    fileSize = Column(Integer, nullable=False)
    mimeType = Column(String(100), nullable=False)
    userId = Column(String, nullable=False, index=True)
    status = Column(String(50), default="processing")
    analysisResult = Column(JSON, nullable=True)
    tags = Column(ARRAY(String), default=[])
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now()) 