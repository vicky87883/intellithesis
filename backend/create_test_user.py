from sqlalchemy.orm import Session
from core.database import SessionLocal
from models.user import User
from models.chat import ChatSession, ChatMessage
from models.document import Document
import uuid

def create_test_user():
    """Create a test user for chatbot testing"""
    db = SessionLocal()
    try:
        # Check if test user already exists
        existing_user = db.query(User).filter(User.email == "test@example.com").first()
        if existing_user:
            print(f"✅ Test user already exists with ID: {existing_user.id}")
            return existing_user.id
        
        # Create new test user
        test_user = User(
            id=str(uuid.uuid4()),
            firstName="Test",
            lastName="User",
            email="test@example.com",
            phone="1234567890",
            password="hashed_password_here"  # In real app, this would be hashed
        )
        
        db.add(test_user)
        db.commit()
        db.refresh(test_user)
        
        print(f"✅ Test user created with ID: {test_user.id}")
        return test_user.id
        
    except Exception as e:
        print(f"❌ Error creating test user: {e}")
        db.rollback()
        return None
    finally:
        db.close()

if __name__ == "__main__":
    user_id = create_test_user()
    if user_id:
        print(f"🎯 Use this user ID for testing: {user_id}") 