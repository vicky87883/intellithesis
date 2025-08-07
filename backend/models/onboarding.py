from sqlalchemy import Column, String, DateTime, Text, Boolean
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from core.database import Base
import uuid

class UserOnboarding(Base):
    __tablename__ = "user_onboarding"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    university = Column(String(255), nullable=False)
    degree_type = Column(String(50), nullable=False)  # Bachelor's, Master's, PhD
    major = Column(String(255), nullable=False)
    enrollment_year = Column(String(10), nullable=False)
    graduation_year = Column(String(10), nullable=False)
    thesis_title = Column(Text, nullable=True)
    supervisor_name = Column(String(255), nullable=True)
    thesis_stage = Column(String(100), nullable=True)  # Planning, Literature Review, etc.
    research_interests = Column(Text, nullable=True)
    familiar_tools = Column(Text, nullable=True)  # JSON array of tools
    help_needed = Column(Text, nullable=True)  # JSON array of help types
    publish_plans = Column(Boolean, default=False)
    has_documents = Column(Boolean, default=False)
    document_paths = Column(Text, nullable=True)  # JSON array of document paths
    onboarding_completed = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
