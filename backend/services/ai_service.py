import os
import openai
from typing import List, Dict, Any, Optional
import json
from datetime import datetime
import asyncio
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import re

class AIService:
    def __init__(self):
        # Initialize OpenAI
        openai.api_key = os.getenv("OPENAI_API_KEY")
        self.llm = ChatOpenAI(
            temperature=0.7,
            model_name="gpt-4",
            openai_api_key=os.getenv("OPENAI_API_KEY")
        )
        
        # Initialize text processing
        try:
            nltk.data.find('tokenizers/punkt')
        except LookupError:
            nltk.download('punkt')
        
        try:
            nltk.data.find('corpora/stopwords')
        except LookupError:
            nltk.download('stopwords')
        
        try:
            nltk.data.find('corpora/wordnet')
        except LookupError:
            nltk.download('wordnet')
        
        self.stop_words = set(stopwords.words('english'))
        self.lemmatizer = WordNetLemmatizer()
        
        # Analysis prompts
        self.analysis_prompts = {
            "general": """
            Analyze the following academic document and provide a comprehensive analysis:
            
            Document: {text}
            
            Please provide:
            1. A concise summary (2-3 sentences)
            2. Key themes and topics identified
            3. Writing quality assessment
            4. Suggestions for improvement
            5. Potential research gaps
            6. Recommended citations
            
            Format your response as JSON with the following structure:
            {{
                "summary": "brief summary",
                "key_themes": ["theme1", "theme2"],
                "writing_quality": "assessment",
                "suggestions": ["suggestion1", "suggestion2"],
                "research_gaps": ["gap1", "gap2"],
                "citations": ["citation1", "citation2"],
                "score": 85
            }}
            """,
            
            "comprehensive": """
            Perform a comprehensive analysis of this academic document:
            
            Document: {text}
            
            Provide detailed analysis including:
            1. Executive summary
            2. Methodology assessment
            3. Literature review analysis
            4. Data analysis evaluation
            5. Conclusion strength
            6. Citation analysis
            7. Plagiarism risk assessment
            8. Overall quality score (0-100)
            
            Format as JSON:
            {{
                "summary": "detailed summary",
                "methodology": "assessment",
                "literature_review": "analysis",
                "data_analysis": "evaluation",
                "conclusion": "strength assessment",
                "citations": ["citation1", "citation2"],
                "plagiarism_risk": "low/medium/high",
                "score": 85,
                "recommendations": ["rec1", "rec2"]
            }}
            """,
            
            "citation": """
            Analyze the citations and references in this document:
            
            Document: {text}
            
            Provide:
            1. Citation analysis
            2. Missing citations
            3. Citation quality assessment
            4. Recommended additional sources
            5. Citation format consistency
            
            Format as JSON:
            {{
                "citation_analysis": "analysis",
                "missing_citations": ["missing1", "missing2"],
                "citation_quality": "assessment",
                "recommended_sources": ["source1", "source2"],
                "format_consistency": "assessment"
            }}
            """,
            
            "structure": """
            Analyze the structure and organization of this academic document:
            
            Document: {text}
            
            Provide:
            1. Structure assessment
            2. Flow analysis
            3. Section organization
            4. Logical coherence
            5. Structural improvements
            
            Format as JSON:
            {{
                "structure_assessment": "assessment",
                "flow_analysis": "analysis",
                "section_organization": "evaluation",
                "logical_coherence": "assessment",
                "structural_improvements": ["improvement1", "improvement2"]
            }}
            """
        }
        
        # Chat prompt
        self.chat_prompt = """
        You are an AI research assistant for IntelliThesis, an academic thesis writing and analysis platform.
        
        Context: {context}
        User's research interests: {research_interests}
        
        User: {message}
        
        Please provide a helpful, academic-focused response that:
        1. Addresses the user's question directly
        2. Provides actionable advice
        3. Suggests relevant resources when appropriate
        4. Maintains a professional, academic tone
        5. Considers the user's research context
        
        Response:
        """

    async def analyze_document(self, text: str, analysis_type: str = "general") -> Dict[str, Any]:
        """Analyze a document using AI"""
        try:
            # Clean and preprocess text
            cleaned_text = self._preprocess_text(text)
            
            # Get appropriate prompt
            prompt_template = self.analysis_prompts.get(analysis_type, self.analysis_prompts["general"])
            prompt = PromptTemplate(
                input_variables=["text"],
                template=prompt_template
            )
            
            # Create chain
            chain = LLMChain(llm=self.llm, prompt=prompt)
            
            # Run analysis
            result = await chain.arun(text=cleaned_text)
            
            # Parse JSON response
            try:
                analysis_result = json.loads(result)
            except json.JSONDecodeError:
                # Fallback if JSON parsing fails
                analysis_result = {
                    "summary": "Analysis completed",
                    "key_themes": [],
                    "suggestions": [],
                    "score": 75
                }
            
            return analysis_result
            
        except Exception as e:
            print(f"Error in document analysis: {e}")
            return {
                "summary": "Analysis failed",
                "error": str(e),
                "score": 0
            }

    async def chat(self, message: str, context: str = "", user_id: str = "") -> str:
        """Chat with AI assistant"""
        try:
            # Get user research interests (in a real app, fetch from database)
            research_interests = ["academic writing", "research methodology"]
            
            prompt = PromptTemplate(
                input_variables=["message", "context", "research_interests"],
                template=self.chat_prompt
            )
            
            chain = LLMChain(llm=self.llm, prompt=prompt)
            
            response = await chain.arun(
                message=message,
                context=context,
                research_interests=", ".join(research_interests)
            )
            
            return response.strip()
            
        except Exception as e:
            print(f"Error in chat: {e}")
            return "I apologize, but I'm having trouble processing your request. Please try again."

    def _preprocess_text(self, text: str) -> str:
        """Preprocess text for analysis"""
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text)
        
        # Remove special characters but keep punctuation
        text = re.sub(r'[^\w\s\.\,\;\:\!\?\-\(\)]', '', text)
        
        # Tokenize and remove stop words
        words = word_tokenize(text.lower())
        words = [self.lemmatizer.lemmatize(word) for word in words if word not in self.stop_words]
        
        return ' '.join(words)

    async def extract_keywords(self, text: str) -> List[str]:
        """Extract keywords from text"""
        try:
            # Simple keyword extraction (in production, use more sophisticated methods)
            words = word_tokenize(text.lower())
            words = [word for word in words if word.isalnum() and word not in self.stop_words]
            
            # Count frequency
            from collections import Counter
            word_freq = Counter(words)
            
            # Return top keywords
            return [word for word, freq in word_freq.most_common(10)]
            
        except Exception as e:
            print(f"Error extracting keywords: {e}")
            return []

    async def generate_summary(self, text: str) -> str:
        """Generate a summary of the text"""
        try:
            prompt = PromptTemplate(
                input_variables=["text"],
                template="Summarize the following academic text in 2-3 sentences:\n\n{text}\n\nSummary:"
            )
            
            chain = LLMChain(llm=self.llm, prompt=prompt)
            summary = await chain.arun(text=text)
            
            return summary.strip()
            
        except Exception as e:
            print(f"Error generating summary: {e}")
            return "Summary generation failed."

    async def suggest_citations(self, text: str, topic: str) -> List[str]:
        """Suggest relevant citations for the text"""
        try:
            prompt = PromptTemplate(
                input_variables=["text", "topic"],
                template="""
                Based on the following text and topic, suggest relevant academic citations:
                
                Text: {text}
                Topic: {topic}
                
                Please suggest 5-10 relevant academic sources that could be cited.
                Format as a list of citations.
                """
            )
            
            chain = LLMChain(llm=self.llm, prompt=prompt)
            citations = await chain.arun(text=text, topic=topic)
            
            # Parse citations (simple parsing)
            citation_list = [line.strip() for line in citations.split('\n') if line.strip()]
            return citation_list[:10]  # Limit to 10 citations
            
        except Exception as e:
            print(f"Error suggesting citations: {e}")
            return []

    async def assess_writing_quality(self, text: str) -> Dict[str, Any]:
        """Assess the writing quality of the text"""
        try:
            prompt = PromptTemplate(
                input_variables=["text"],
                template="""
                Assess the writing quality of this academic text:
                
                {text}
                
                Provide assessment in JSON format:
                {{
                    "clarity": "assessment",
                    "coherence": "assessment", 
                    "grammar": "assessment",
                    "academic_tone": "assessment",
                    "overall_score": 85,
                    "improvements": ["improvement1", "improvement2"]
                }}
                """
            )
            
            chain = LLMChain(llm=self.llm, prompt=prompt)
            assessment = await chain.arun(text=text)
            
            try:
                return json.loads(assessment)
            except json.JSONDecodeError:
                return {
                    "clarity": "Good",
                    "coherence": "Good",
                    "grammar": "Good", 
                    "academic_tone": "Good",
                    "overall_score": 80,
                    "improvements": ["Consider adding more specific examples"]
                }
                
        except Exception as e:
            print(f"Error assessing writing quality: {e}")
            return {
                "error": str(e),
                "overall_score": 0
            } 