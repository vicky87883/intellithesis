from sqlalchemy import text
from core.database import engine, Base
from models.user import User
from models.chat import ChatSession, ChatMessage
from models.document import Document

def reset_database():
    """Drop all tables and recreate them with correct schema"""
    print("🗑️  Dropping all existing tables...")
    
    with engine.connect() as conn:
        # Drop all tables
        conn.execute(text("DROP TABLE IF EXISTS chat_messages CASCADE"))
        conn.execute(text("DROP TABLE IF EXISTS chat_sessions CASCADE"))
        conn.execute(text("DROP TABLE IF EXISTS documents CASCADE"))
        conn.execute(text("DROP TABLE IF EXISTS users CASCADE"))
        conn.commit()
    
    print("✅ All tables dropped successfully")
    
    # Recreate tables with correct schema
    print("🔨 Creating tables with correct schema...")
    Base.metadata.create_all(bind=engine)
    print("✅ Database tables recreated successfully")

if __name__ == "__main__":
    reset_database() 