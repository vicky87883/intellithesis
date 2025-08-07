from fastapi import APIRouter, HTTPException, UploadFile, File, Form, Depends
from sqlalchemy.orm import Session
from core.database import get_db
from models.onboarding import UserOnboarding
from schemas.onboarding import OnboardingCreate, OnboardingResponse
import json
import os
from typing import List, Optional

router = APIRouter()

@router.post("/onboarding", response_model=OnboardingResponse)
async def create_onboarding(
    full_name: str = Form(...),
    email: str = Form(...),
    university: str = Form(...),
    degree_type: str = Form(...),
    major: str = Form(...),
    enrollment_year: str = Form(...),
    graduation_year: str = Form(...),
    thesis_title: Optional[str] = Form(None),
    supervisor_name: Optional[str] = Form(None),
    thesis_stage: Optional[str] = Form(None),
    research_interests: Optional[str] = Form(None),
    familiar_tools: Optional[str] = Form(None),
    help_needed: Optional[str] = Form(None),
    publish_plans: bool = Form(False),
    has_documents: bool = Form(False),
    documents: Optional[List[UploadFile]] = File(None),
    db: Session = Depends(get_db)
):
    """Create new user onboarding record"""
    try:
        # Handle file uploads
        document_paths = []
        if documents:
            upload_dir = "uploads/onboarding"
            os.makedirs(upload_dir, exist_ok=True)
            
            for doc in documents:
                file_path = f"{upload_dir}/{doc.filename}"
                with open(file_path, "wb") as buffer:
                    content = await doc.read()
                    buffer.write(content)
                document_paths.append(file_path)
        
        # Create onboarding record
        onboarding_data = {
            "full_name": full_name,
            "email": email,
            "university": university,
            "degree_type": degree_type,
            "major": major,
            "enrollment_year": enrollment_year,
            "graduation_year": graduation_year,
            "thesis_title": thesis_title,
            "supervisor_name": supervisor_name,
            "thesis_stage": thesis_stage,
            "research_interests": research_interests,
            "familiar_tools": familiar_tools,
            "help_needed": help_needed,
            "publish_plans": publish_plans,
            "has_documents": has_documents,
            "document_paths": json.dumps(document_paths) if document_paths else None,
            "onboarding_completed": True
        }
        
        onboarding = UserOnboarding(**onboarding_data)
        db.add(onboarding)
        db.commit()
        db.refresh(onboarding)
        
        return OnboardingResponse(
            success=True,
            message="Onboarding completed successfully!",
            data=onboarding
        )
        
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/onboarding/{email}")
async def get_onboarding(email: str, db: Session = Depends(get_db)):
    """Get onboarding data by email"""
    onboarding = db.query(UserOnboarding).filter(UserOnboarding.email == email).first()
    if not onboarding:
        raise HTTPException(status_code=404, detail="Onboarding data not found")
    return onboarding
