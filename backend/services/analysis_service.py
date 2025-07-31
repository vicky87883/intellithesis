from typing import Dict, Any, List, Optional
import json
from datetime import datetime
import re
from collections import Counter
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class AnalysisService:
    def __init__(self):
        self.analysis_types = {
            "comprehensive": self._comprehensive_analysis,
            "writing_quality": self._writing_quality_analysis,
            "structure": self._structure_analysis,
            "citation": self._citation_analysis,
            "research_gaps": self._research_gaps_analysis
        }

    async def perform_comprehensive_analysis(
        self, 
        document_content: str, 
        analysis_type: str = "comprehensive",
        user_id: str = ""
    ) -> Dict[str, Any]:
        """Perform comprehensive document analysis"""
        try:
            if analysis_type in self.analysis_types:
                analysis_func = self.analysis_types[analysis_type]
                return await analysis_func(document_content, user_id)
            else:
                return await self._comprehensive_analysis(document_content, user_id)
                
        except Exception as e:
            print(f"Error in comprehensive analysis: {e}")
            return {
                "error": str(e),
                "status": "failed",
                "timestamp": datetime.now().isoformat()
            }

    async def _comprehensive_analysis(self, content: str, user_id: str) -> Dict[str, Any]:
        """Perform comprehensive analysis"""
        try:
            # Basic text statistics
            stats = self._calculate_text_statistics(content)
            
            # Readability analysis
            readability = self._analyze_readability(content)
            
            # Structure analysis
            structure = self._analyze_structure(content)
            
            # Citation analysis
            citations = self._analyze_citations(content)
            
            # Writing quality
            writing_quality = self._analyze_writing_quality(content)
            
            # Research gaps
            research_gaps = self._identify_research_gaps(content)
            
            # Overall assessment
            overall_score = self._calculate_overall_score(
                readability, writing_quality, structure, citations
            )
            
            return {
                "analysis_type": "comprehensive",
                "user_id": user_id,
                "timestamp": datetime.now().isoformat(),
                "statistics": stats,
                "readability": readability,
                "structure": structure,
                "citations": citations,
                "writing_quality": writing_quality,
                "research_gaps": research_gaps,
                "overall_score": overall_score,
                "recommendations": self._generate_recommendations(
                    readability, writing_quality, structure, citations, research_gaps
                )
            }
            
        except Exception as e:
            print(f"Error in comprehensive analysis: {e}")
            return {"error": str(e)}

    async def _writing_quality_analysis(self, content: str, user_id: str) -> Dict[str, Any]:
        """Analyze writing quality"""
        try:
            # Grammar and style analysis
            grammar_score = self._analyze_grammar(content)
            style_score = self._analyze_style(content)
            clarity_score = self._analyze_clarity(content)
            
            # Vocabulary analysis
            vocabulary = self._analyze_vocabulary(content)
            
            # Sentence structure
            sentence_analysis = self._analyze_sentence_structure(content)
            
            return {
                "analysis_type": "writing_quality",
                "user_id": user_id,
                "timestamp": datetime.now().isoformat(),
                "grammar_score": grammar_score,
                "style_score": style_score,
                "clarity_score": clarity_score,
                "vocabulary": vocabulary,
                "sentence_analysis": sentence_analysis,
                "overall_writing_score": (grammar_score + style_score + clarity_score) / 3
            }
            
        except Exception as e:
            print(f"Error in writing quality analysis: {e}")
            return {"error": str(e)}

    async def _structure_analysis(self, content: str, user_id: str) -> Dict[str, Any]:
        """Analyze document structure"""
        try:
            # Section analysis
            sections = self._identify_sections(content)
            
            # Flow analysis
            flow_score = self._analyze_flow(content)
            
            # Logical coherence
            coherence_score = self._analyze_coherence(content)
            
            # Organization
            organization_score = self._analyze_organization(content)
            
            return {
                "analysis_type": "structure",
                "user_id": user_id,
                "timestamp": datetime.now().isoformat(),
                "sections": sections,
                "flow_score": flow_score,
                "coherence_score": coherence_score,
                "organization_score": organization_score,
                "overall_structure_score": (flow_score + coherence_score + organization_score) / 3
            }
            
        except Exception as e:
            print(f"Error in structure analysis: {e}")
            return {"error": str(e)}

    async def _citation_analysis(self, content: str, user_id: str) -> Dict[str, Any]:
        """Analyze citations and references"""
        try:
            # Extract citations
            citations = self._extract_citations(content)
            
            # Citation quality
            citation_quality = self._assess_citation_quality(citations)
            
            # Citation coverage
            coverage_score = self._assess_citation_coverage(content, citations)
            
            # Citation format consistency
            format_consistency = self._assess_citation_format(citations)
            
            return {
                "analysis_type": "citation",
                "user_id": user_id,
                "timestamp": datetime.now().isoformat(),
                "citations": citations,
                "citation_quality": citation_quality,
                "coverage_score": coverage_score,
                "format_consistency": format_consistency,
                "overall_citation_score": (citation_quality + coverage_score + format_consistency) / 3
            }
            
        except Exception as e:
            print(f"Error in citation analysis: {e}")
            return {"error": str(e)}

    async def _research_gaps_analysis(self, content: str, user_id: str) -> Dict[str, Any]:
        """Identify research gaps"""
        try:
            # Identify potential gaps
            gaps = self._identify_research_gaps(content)
            
            # Suggest additional research areas
            suggestions = self._suggest_research_areas(content)
            
            # Assess completeness
            completeness_score = self._assess_completeness(content)
            
            return {
                "analysis_type": "research_gaps",
                "user_id": user_id,
                "timestamp": datetime.now().isoformat(),
                "identified_gaps": gaps,
                "research_suggestions": suggestions,
                "completeness_score": completeness_score
            }
            
        except Exception as e:
            print(f"Error in research gaps analysis: {e}")
            return {"error": str(e)}

    def _calculate_text_statistics(self, content: str) -> Dict[str, Any]:
        """Calculate basic text statistics"""
        words = content.split()
        sentences = re.split(r'[.!?]+', content)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        return {
            "word_count": len(words),
            "sentence_count": len(sentences),
            "paragraph_count": len([p for p in content.split('\n\n') if p.strip()]),
            "character_count": len(content),
            "average_sentence_length": len(words) / len(sentences) if sentences else 0,
            "average_word_length": sum(len(word) for word in words) / len(words) if words else 0
        }

    def _analyze_readability(self, content: str) -> Dict[str, Any]:
        """Analyze text readability"""
        words = content.split()
        sentences = re.split(r'[.!?]+', content)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        if not sentences or not words:
            return {"flesch_reading_ease": 0, "flesch_kincaid_grade": 0}
        
        # Calculate syllables (simplified)
        syllables = sum(1 for char in content.lower() if char in 'aeiouy')
        
        # Flesch Reading Ease
        flesch_ease = 206.835 - (1.015 * (len(words) / len(sentences))) - (84.6 * (syllables / len(words)))
        flesch_ease = max(0, min(100, flesch_ease))
        
        # Flesch-Kincaid Grade Level
        flesch_grade = (0.39 * (len(words) / len(sentences))) + (11.8 * (syllables / len(words))) - 15.59
        flesch_grade = max(0, flesch_grade)
        
        return {
            "flesch_reading_ease": round(flesch_ease, 2),
            "flesch_kincaid_grade": round(flesch_grade, 2),
            "readability_level": self._get_readability_level(flesch_ease)
        }

    def _analyze_structure(self, content: str) -> Dict[str, Any]:
        """Analyze document structure"""
        sections = self._identify_sections(content)
        
        return {
            "sections_found": list(sections.keys()),
            "section_coverage": len(sections) / 8,  # Assuming 8 standard sections
            "structure_score": min(100, len(sections) * 12.5)  # 12.5 points per section
        }

    def _analyze_citations(self, content: str) -> Dict[str, Any]:
        """Analyze citations"""
        citations = self._extract_citations(content)
        
        return {
            "citation_count": len(citations),
            "citation_density": len(citations) / max(1, len(content.split()) / 100),
            "citation_score": min(100, len(citations) * 2)  # 2 points per citation
        }

    def _analyze_writing_quality(self, content: str) -> Dict[str, Any]:
        """Analyze writing quality"""
        # Simple heuristics for writing quality
        sentences = re.split(r'[.!?]+', content)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        # Average sentence length
        avg_sentence_length = sum(len(s.split()) for s in sentences) / len(sentences) if sentences else 0
        
        # Sentence length variety
        sentence_lengths = [len(s.split()) for s in sentences]
        length_variety = np.std(sentence_lengths) if sentence_lengths else 0
        
        # Vocabulary diversity
        words = content.lower().split()
        unique_words = set(words)
        vocabulary_diversity = len(unique_words) / len(words) if words else 0
        
        return {
            "avg_sentence_length": avg_sentence_length,
            "length_variety": length_variety,
            "vocabulary_diversity": vocabulary_diversity,
            "quality_score": min(100, (avg_sentence_length * 2 + length_variety * 3 + vocabulary_diversity * 50))
        }

    def _identify_research_gaps(self, content: str) -> List[str]:
        """Identify potential research gaps"""
        gaps = []
        
        # Look for phrases indicating gaps
        gap_indicators = [
            "limited research",
            "further study needed",
            "future research",
            "research gap",
            "unexplored",
            "understudied",
            "needs investigation"
        ]
        
        content_lower = content.lower()
        for indicator in gap_indicators:
            if indicator in content_lower:
                gaps.append(f"Potential gap identified: {indicator}")
        
        return gaps

    def _calculate_overall_score(self, readability: Dict, writing_quality: Dict, 
                                structure: Dict, citations: Dict) -> float:
        """Calculate overall document score"""
        scores = []
        
        # Readability score (0-100)
        if "flesch_reading_ease" in readability:
            scores.append(min(100, readability["flesch_reading_ease"]))
        
        # Writing quality score
        if "quality_score" in writing_quality:
            scores.append(writing_quality["quality_score"])
        
        # Structure score
        if "structure_score" in structure:
            scores.append(structure["structure_score"])
        
        # Citation score
        if "citation_score" in citations:
            scores.append(citations["citation_score"])
        
        return sum(scores) / len(scores) if scores else 0

    def _generate_recommendations(self, readability: Dict, writing_quality: Dict,
                                 structure: Dict, citations: Dict, research_gaps: List) -> List[str]:
        """Generate improvement recommendations"""
        recommendations = []
        
        # Readability recommendations
        if readability.get("flesch_reading_ease", 0) < 60:
            recommendations.append("Consider simplifying sentence structure for better readability")
        
        # Writing quality recommendations
        if writing_quality.get("avg_sentence_length", 0) > 25:
            recommendations.append("Consider breaking down long sentences for clarity")
        
        # Structure recommendations
        if structure.get("section_coverage", 0) < 0.5:
            recommendations.append("Consider adding more structured sections to your document")
        
        # Citation recommendations
        if citations.get("citation_count", 0) < 10:
            recommendations.append("Consider adding more citations to support your arguments")
        
        # Research gaps
        if research_gaps:
            recommendations.append("Address the identified research gaps in your work")
        
        return recommendations

    def _identify_sections(self, content: str) -> Dict[str, str]:
        """Identify document sections"""
        sections = {}
        section_patterns = {
            "abstract": r"abstract\s*[:.]?\s*(.*?)(?=\n\n|\n[A-Z]|$)",
            "introduction": r"introduction\s*[:.]?\s*(.*?)(?=\n\n|\n[A-Z]|$)",
            "methodology": r"methodology\s*[:.]?\s*(.*?)(?=\n\n|\n[A-Z]|$)",
            "results": r"results\s*[:.]?\s*(.*?)(?=\n\n|\n[A-Z]|$)",
            "discussion": r"discussion\s*[:.]?\s*(.*?)(?=\n\n|\n[A-Z]|$)",
            "conclusion": r"conclusion\s*[:.]?\s*(.*?)(?=\n\n|\n[A-Z]|$)"
        }
        
        content_lower = content.lower()
        for section_name, pattern in section_patterns.items():
            match = re.search(pattern, content_lower, re.IGNORECASE | re.DOTALL)
            if match:
                sections[section_name] = match.group(1).strip()
        
        return sections

    def _extract_citations(self, content: str) -> List[str]:
        """Extract citations from content"""
        citation_patterns = [
            r'\([A-Za-z]+\s+et\s+al\.\s*,\s*\d{4}\)',
            r'\([A-Za-z]+\s*,\s*\d{4}\)',
            r'\[[A-Za-z]+\s+et\s+al\.\s*,\s*\d{4}\]',
            r'\[[A-Za-z]+\s*,\s*\d{4}\]'
        ]
        
        citations = []
        for pattern in citation_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            citations.extend(matches)
        
        return list(set(citations))

    def _get_readability_level(self, flesch_score: float) -> str:
        """Get readability level description"""
        if flesch_score >= 90:
            return "Very Easy"
        elif flesch_score >= 80:
            return "Easy"
        elif flesch_score >= 70:
            return "Fairly Easy"
        elif flesch_score >= 60:
            return "Standard"
        elif flesch_score >= 50:
            return "Fairly Difficult"
        elif flesch_score >= 30:
            return "Difficult"
        else:
            return "Very Difficult"

    def _analyze_grammar(self, content: str) -> float:
        """Analyze grammar (simplified)"""
        # This would typically use a grammar checking library
        # For now, return a basic score
        return 85.0

    def _analyze_style(self, content: str) -> float:
        """Analyze writing style"""
        # Basic style analysis
        sentences = re.split(r'[.!?]+', content)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        if not sentences:
            return 0.0
        
        # Calculate style score based on sentence variety
        sentence_lengths = [len(s.split()) for s in sentences]
        variety_score = min(100, np.std(sentence_lengths) * 5)
        
        return variety_score

    def _analyze_clarity(self, content: str) -> float:
        """Analyze clarity"""
        # Simple clarity analysis
        words = content.split()
        unique_words = set(words)
        
        # Clarity based on vocabulary diversity
        clarity_score = min(100, (len(unique_words) / len(words)) * 100) if words else 0
        
        return clarity_score

    def _analyze_vocabulary(self, content: str) -> Dict[str, Any]:
        """Analyze vocabulary usage"""
        words = content.lower().split()
        word_freq = Counter(words)
        
        return {
            "unique_words": len(set(words)),
            "total_words": len(words),
            "vocabulary_diversity": len(set(words)) / len(words) if words else 0,
            "most_common_words": word_freq.most_common(10)
        }

    def _analyze_sentence_structure(self, content: str) -> Dict[str, Any]:
        """Analyze sentence structure"""
        sentences = re.split(r'[.!?]+', content)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        sentence_lengths = [len(s.split()) for s in sentences]
        
        return {
            "total_sentences": len(sentences),
            "avg_sentence_length": np.mean(sentence_lengths) if sentence_lengths else 0,
            "sentence_length_variety": np.std(sentence_lengths) if sentence_lengths else 0,
            "short_sentences": len([l for l in sentence_lengths if l <= 10]),
            "long_sentences": len([l for l in sentence_lengths if l > 20])
        }

    def _analyze_flow(self, content: str) -> float:
        """Analyze document flow"""
        # Simple flow analysis based on section transitions
        sections = self._identify_sections(content)
        return min(100, len(sections) * 16.67)  # 16.67 points per section

    def _analyze_coherence(self, content: str) -> float:
        """Analyze logical coherence"""
        # Simplified coherence analysis
        sentences = re.split(r'[.!?]+', content)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        # Coherence based on sentence count and content length
        coherence_score = min(100, len(sentences) * 2)
        
        return coherence_score

    def _analyze_organization(self, content: str) -> float:
        """Analyze document organization"""
        sections = self._identify_sections(content)
        return min(100, len(sections) * 16.67)

    def _assess_citation_quality(self, citations: List[str]) -> float:
        """Assess citation quality"""
        if not citations:
            return 0.0
        
        # Simple quality assessment
        quality_score = min(100, len(citations) * 5)
        return quality_score

    def _assess_citation_coverage(self, content: str, citations: List[str]) -> float:
        """Assess citation coverage"""
        word_count = len(content.split())
        citation_density = len(citations) / max(1, word_count / 100)
        
        return min(100, citation_density * 20)

    def _assess_citation_format(self, citations: List[str]) -> float:
        """Assess citation format consistency"""
        if not citations:
            return 0.0
        
        # Check format consistency
        consistent_formats = 0
        for citation in citations:
            if re.match(r'\([A-Za-z]+\s*,\s*\d{4}\)', citation):
                consistent_formats += 1
        
        return (consistent_formats / len(citations)) * 100

    def _suggest_research_areas(self, content: str) -> List[str]:
        """Suggest additional research areas"""
        suggestions = []
        
        # Look for areas that might need more research
        research_indicators = [
            "further investigation",
            "additional research",
            "future studies",
            "more research needed"
        ]
        
        content_lower = content.lower()
        for indicator in research_indicators:
            if indicator in content_lower:
                suggestions.append(f"Consider {indicator}")
        
        return suggestions

    def _assess_completeness(self, content: str) -> float:
        """Assess document completeness"""
        sections = self._identify_sections(content)
        completeness_score = min(100, len(sections) * 16.67)
        
        return completeness_score 