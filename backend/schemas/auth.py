from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: str
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    token: str
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None
    lastLoginAt: Optional[datetime] = None

    class Config:
        from_attributes = True 