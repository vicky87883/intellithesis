import os
import PyPDF2
from PIL import Image
import pytesseract
from typing import Optional, Dict, Any
import aiofiles
import tempfile
import re
import uuid
from datetime import datetime

class FileProcessor:
    def __init__(self):
        self.supported_image_formats = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff']
        self.supported_document_formats = ['.pdf', '.txt', '.doc', '.docx']
        
        # Configure tesseract path for OCR (adjust based on your system)
        try:
            pytesseract.get_tesseract_version()
        except Exception:
            # Set tesseract path if needed
            # pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
            pass

    async def extract_pdf_text(self, file_path: str) -> str:
        """Extract text from PDF file"""
        try:
            text_content = ""
            with open(file_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                for page in pdf_reader.pages:
                    text_content += page.extract_text() + "\n"
            
            return self._clean_text(text_content)
            
        except Exception as e:
            print(f"Error extracting PDF text: {e}")
            return "PDF text extraction failed."

    async def generate_image_caption(self, file_path: str) -> str:
        """Generate caption for image using OCR and basic analysis"""
        try:
            # Open image
            image = Image.open(file_path)
            
            # Extract text using OCR
            ocr_text = pytesseract.image_to_string(image)
            
            # Basic image analysis
            width, height = image.size
            format_info = image.format
            mode_info = image.mode
            
            # Generate caption based on extracted information
            caption = f"Image ({width}x{height}, {format_info}, {mode_info})"
            
            if ocr_text.strip():
                # Clean OCR text
                clean_text = re.sub(r'\s+', ' ', ocr_text.strip())
                caption += f" - Contains text: {clean_text[:100]}..."
            
            return caption
            
        except Exception as e:
            print(f"Error generating image caption: {e}")
            return "Image analysis failed."

    async def process_uploaded_file(self, file_path: str, file_type: str) -> Dict[str, Any]:
        """Process uploaded file and return analysis results"""
        try:
            result = {
                "filename": os.path.basename(file_path),
                "file_path": file_path,
                "file_type": file_type,
                "file_size": os.path.getsize(file_path),
                "processed_at": datetime.now().isoformat(),
                "content_summary": None,
                "image_caption": None,
                "extracted_text": None,
                "analysis": {}
            }
            
            # Process based on file type
            if file_type.lower() in ['.pdf']:
                extracted_text = await self.extract_pdf_text(file_path)
                result["extracted_text"] = extracted_text
                result["content_summary"] = self._generate_summary(extracted_text)
                result["analysis"] = await self._analyze_document_content(extracted_text)
                
            elif file_type.lower() in self.supported_image_formats:
                caption = await self.generate_image_caption(file_path)
                result["image_caption"] = caption
                result["analysis"] = await self._analyze_image_content(file_path)
                
            elif file_type.lower() in ['.txt', '.doc', '.docx']:
                # For text files, read content directly
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                result["extracted_text"] = content
                result["content_summary"] = self._generate_summary(content)
                result["analysis"] = await self._analyze_document_content(content)
            
            return result
            
        except Exception as e:
            print(f"Error processing uploaded file: {e}")
            return {
                "error": str(e),
                "filename": os.path.basename(file_path),
                "file_path": file_path,
                "file_type": file_type
            }

    def _clean_text(self, text: str) -> str:
        """Clean and normalize text"""
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text)
        
        # Remove special characters but keep punctuation
        text = re.sub(r'[^\w\s\.\,\;\:\!\?\-\(\)]', '', text)
        
        # Normalize line breaks
        text = text.replace('\n', ' ').replace('\r', ' ')
        
        return text.strip()

    def _generate_summary(self, text: str, max_length: int = 200) -> str:
        """Generate a brief summary of the text"""
        try:
            # Simple summary generation
            sentences = re.split(r'[.!?]+', text)
            sentences = [s.strip() for s in sentences if s.strip()]
            
            if not sentences:
                return "No readable content found."
            
            # Take first few sentences
            summary = '. '.join(sentences[:3])
            
            if len(summary) > max_length:
                summary = summary[:max_length] + "..."
            
            return summary
            
        except Exception as e:
            print(f"Error generating summary: {e}")
            return "Summary generation failed."

    async def _analyze_document_content(self, text: str) -> Dict[str, Any]:
        """Analyze document content"""
        try:
            analysis = {
                "word_count": len(text.split()),
                "sentence_count": len(re.split(r'[.!?]+', text)),
                "paragraph_count": len([p for p in text.split('\n\n') if p.strip()]),
                "readability_score": self._calculate_readability(text),
                "key_topics": self._extract_key_topics(text),
                "document_type": self._classify_document(text)
            }
            
            return analysis
            
        except Exception as e:
            print(f"Error analyzing document content: {e}")
            return {"error": str(e)}

    async def _analyze_image_content(self, file_path: str) -> Dict[str, Any]:
        """Analyze image content"""
        try:
            image = Image.open(file_path)
            
            analysis = {
                "dimensions": image.size,
                "format": image.format,
                "mode": image.mode,
                "file_size": os.path.getsize(file_path),
                "has_text": False,
                "estimated_content": "image"
            }
            
            # Check if image contains text
            try:
                ocr_text = pytesseract.image_to_string(image)
                if ocr_text.strip():
                    analysis["has_text"] = True
                    analysis["text_length"] = len(ocr_text.strip())
            except:
                pass
            
            return analysis
            
        except Exception as e:
            print(f"Error analyzing image content: {e}")
            return {"error": str(e)}

    def _calculate_readability(self, text: str) -> float:
        """Calculate basic readability score"""
        try:
            sentences = re.split(r'[.!?]+', text)
            words = text.split()
            
            if not sentences or not words:
                return 0.0
            
            avg_sentence_length = len(words) / len(sentences)
            
            # Simple Flesch Reading Ease approximation
            if avg_sentence_length <= 10:
                return 90.0
            elif avg_sentence_length <= 15:
                return 80.0
            elif avg_sentence_length <= 20:
                return 70.0
            else:
                return 60.0
                
        except Exception:
            return 50.0

    def _extract_key_topics(self, text: str, max_topics: int = 5) -> list:
        """Extract key topics from text"""
        try:
            # Simple keyword extraction
            words = re.findall(r'\b\w+\b', text.lower())
            
            # Remove common words
            stop_words = {'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'}
            words = [word for word in words if word not in stop_words and len(word) > 3]
            
            # Count frequency
            from collections import Counter
            word_freq = Counter(words)
            
            # Return top topics
            return [word for word, freq in word_freq.most_common(max_topics)]
            
        except Exception as e:
            print(f"Error extracting key topics: {e}")
            return []

    def _classify_document(self, text: str) -> str:
        """Classify document type based on content"""
        try:
            text_lower = text.lower()
            
            # Simple classification based on keywords
            if any(word in text_lower for word in ['abstract', 'introduction', 'conclusion', 'references']):
                return "academic_paper"
            elif any(word in text_lower for word in ['chapter', 'section', 'book']):
                return "book_chapter"
            elif any(word in text_lower for word in ['resume', 'cv', 'curriculum']):
                return "resume"
            elif any(word in text_lower for word in ['report', 'analysis', 'study']):
                return "report"
            else:
                return "general_document"
                
        except Exception:
            return "unknown"

    def validate_file_type(self, filename: str) -> bool:
        """Validate if file type is supported"""
        file_extension = os.path.splitext(filename)[1].lower()
        return file_extension in self.supported_image_formats + self.supported_document_formats

    def get_file_info(self, file_path: str) -> Dict[str, Any]:
        """Get basic file information"""
        try:
            stat = os.stat(file_path)
            return {
                "filename": os.path.basename(file_path),
                "file_size": stat.st_size,
                "created_at": datetime.fromtimestamp(stat.st_ctime).isoformat(),
                "modified_at": datetime.fromtimestamp(stat.st_mtime).isoformat(),
                "file_type": os.path.splitext(file_path)[1].lower()
            }
        except Exception as e:
            print(f"Error getting file info: {e}")
            return {"error": str(e)} 