from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from core.database import get_db
from models.document import Document
from schemas.document import DocumentCreate, DocumentResponse

router = APIRouter()

@router.get("/", response_model=List[DocumentResponse])
async def get_documents(db: Session = Depends(get_db)):
    """Get all documents"""
    try:
        documents = db.query(Document).all()
        return documents
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch documents: {str(e)}"
        )

@router.post("/", response_model=DocumentResponse)
async def create_document(document_data: DocumentCreate, db: Session = Depends(get_db)):
    """Create a new document"""
    try:
        document = Document(**document_data.dict())
        db.add(document)
        db.commit()
        db.refresh(document)
        return document
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create document: {str(e)}"
        ) 