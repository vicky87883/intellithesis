from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from uuid import UUID

class OnboardingBase(BaseModel):
    full_name: str
    email: EmailStr
    university: str
    degree_type: str
    major: str
    enrollment_year: str
    graduation_year: str
    thesis_title: Optional[str] = None
    supervisor_name: Optional[str] = None
    thesis_stage: Optional[str] = None
    research_interests: Optional[str] = None
    familiar_tools: Optional[str] = None
    help_needed: Optional[str] = None
    publish_plans: bool = False
    has_documents: bool = False

class OnboardingCreate(OnboardingBase):
    pass

class OnboardingResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None

class OnboardingData(BaseModel):
    id: UUID
    full_name: str
    email: str
    university: str
    degree_type: str
    major: str
    enrollment_year: str
    graduation_year: str
    thesis_title: Optional[str]
    supervisor_name: Optional[str]
    thesis_stage: Optional[str]
    research_interests: Optional[str]
    familiar_tools: Optional[str]
    help_needed: Optional[str]
    publish_plans: bool
    has_documents: bool
    document_paths: Optional[str]
    onboarding_completed: bool
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True
