import os
from typing import List, Dict, Any, Optional
from langchain_groq import ChatGroq
from langchain.schema import HumanMessage, SystemMessage
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
import nltk
from nltk.corpus import wordnet
import json

# Download required NLTK data
try:
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('wordnet')

class AIService:
    def __init__(self):
        # Initialize Groq instead of OpenAI
        self.groq_api_key = os.getenv("GROQ_API_KEY", "")
        
        if self.groq_api_key:
            try:
                self.llm = ChatGroq(
                    groq_api_key=self.groq_api_key,
                    model_name="llama3-70b-8192",  # Using Llama model as requested
                    temperature=0.7,
                    max_tokens=4096
                )
            except Exception as e:
                print(f"Failed to initialize Groq: {e}")
                self.llm = None
        else:
            self.llm = None

    def chat(self, message: str, context: str = "", user_id: str = None) -> str:
        """Chat with the AI assistant"""
        if not self.llm:
            return "I'm currently in demo mode. Please configure the Groq API key to enable full functionality."
        
        try:
            # Create system message for research assistant context
            system_prompt = """You are IntelliThesis, an intelligent research assistant designed to help with academic research, document analysis, and scholarly writing. 

Your capabilities include:
- Analyzing research papers and academic documents
- Providing insights on research methodologies
- Helping with literature reviews and citations
- Answering questions about academic topics
- Assisting with research proposal development
- Explaining complex concepts in simple terms

Always provide well-reasoned, evidence-based responses. If you're unsure about something, acknowledge the limitations and suggest where to find more information.

Current context: {context}"""

            # Prepare messages
            messages = [
                SystemMessage(content=system_prompt.format(context=context)),
                HumanMessage(content=message)
            ]
            
            # Get response from Groq
            response = self.llm.invoke(messages)
            return response.content
            
        except Exception as e:
            print(f"Error in chat: {e}")
            return f"I encountered an error: {str(e)}. Please try again."

    def analyze_document(self, text: str, document_type: str = "general") -> Dict[str, Any]:
        """Analyze uploaded document content"""
        if not self.llm:
            return {
                "summary": "Document analysis is currently in demo mode.",
                "key_points": ["Demo mode active"],
                "suggestions": ["Configure Groq API for full analysis"]
            }
        
        try:
            analysis_prompt = f"""Analyze the following {document_type} document and provide:

1. A concise summary (2-3 sentences)
2. Key points and findings
3. Research implications
4. Suggestions for further research

Document content:
{text[:4000]}  # Limit to first 4000 characters

Provide the analysis in JSON format with keys: summary, key_points, implications, suggestions"""

            messages = [
                SystemMessage(content="You are a research document analyst. Provide structured analysis in JSON format."),
                HumanMessage(content=analysis_prompt)
            ]
            
            response = self.llm.invoke(messages)
            
            # Try to parse JSON response
            try:
                analysis = json.loads(response.content)
                return analysis
            except json.JSONDecodeError:
                # If JSON parsing fails, return structured text
                return {
                    "summary": response.content[:200] + "...",
                    "key_points": ["Analysis completed"],
                    "implications": ["Document processed"],
                    "suggestions": ["Review the full analysis"]
                }
                
        except Exception as e:
            print(f"Error in document analysis: {e}")
            return {
                "summary": f"Analysis failed: {str(e)}",
                "key_points": ["Error occurred"],
                "implications": ["Unable to process"],
                "suggestions": ["Try again later"]
            }

    def extract_text_from_pdf(self, pdf_content: bytes) -> str:
        """Extract text from PDF content"""
        try:
            import PyPDF2
            import io
            
            pdf_file = io.BytesIO(pdf_content)
            pdf_reader = PyPDF2.PdfReader(pdf_file)
            
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
            
            return text.strip()
        except Exception as e:
            print(f"Error extracting PDF text: {e}")
            return "Unable to extract text from PDF"

    def process_image(self, image_content: bytes, task: str = "describe") -> str:
        """Process image content (placeholder for future implementation)"""
        return "Image processing is currently in demo mode. This feature will be implemented with vision capabilities."

    def generate_response_with_context(self, user_message: str, chat_history: List[Dict], context: str = "") -> str:
        """Generate response considering chat history and context"""
        if not self.llm:
            return "I'm in demo mode. Please configure Groq API for full functionality."
        
        try:
            # Build context from chat history
            history_context = ""
            if chat_history:
                recent_messages = chat_history[-5:]  # Last 5 messages
                history_context = "\n".join([
                    f"{'User' if msg.get('role') == 'user' else 'Assistant'}: {msg.get('content', '')}"
                    for msg in recent_messages
                ])
            
            full_context = f"{context}\n\nRecent conversation:\n{history_context}"
            
            return self.chat(user_message, full_context)
            
        except Exception as e:
            print(f"Error generating response: {e}")
            return f"I encountered an error: {str(e)}. Please try again." 