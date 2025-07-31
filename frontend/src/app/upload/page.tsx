'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  FileText, 
  Brain, 
  CheckCircle, 
  AlertCircle,
  X,
  Download,
  Eye,
  Search,
  Sparkles,
  Clock,
  BarChart3
} from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  insights?: string[];
}

export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    files.forEach((file) => {
      const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      const newFile: UploadedFile = {
        id: fileId,
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type,
        status: 'uploading',
        progress: 0
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload progress
      simulateUpload(fileId);
    });
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        setUploadedFiles(prev => prev.map(file => 
          file.id === fileId 
            ? { ...file, status: 'processing', progress: 100 }
            : file
        ));

        // Simulate AI processing
        setTimeout(() => {
          setUploadedFiles(prev => prev.map(file => 
            file.id === fileId 
              ? { 
                  ...file, 
                  status: 'completed',
                  insights: [
                    'Document structure analyzed',
                    'Key themes identified',
                    'Citation opportunities found',
                    'Writing style assessed'
                  ]
                }
              : file
          ));
        }, 2000);
      } else {
        setUploadedFiles(prev => prev.map(file => 
          file.id === fileId 
            ? { ...file, progress }
            : file
        ));
      }
    }, 200);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploading':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'processing':
        return <Brain className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'uploading':
        return 'Uploading...';
      case 'processing':
        return 'AI Processing...';
      case 'completed':
        return 'Analysis Complete';
      case 'error':
        return 'Upload Failed';
      default:
        return 'Pending';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">IntelliThesis</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Chat</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload & Analyze Documents</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your research papers, theses, and academic documents for AI-powered analysis and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Documents</h2>
              
              {/* Drag & Drop Area */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragOver 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-blue-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Drop files here or click to browse
                </h3>
                <p className="text-gray-500 mb-4">
                  Supports PDF, DOC, DOCX, TXT files up to 50MB
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Choose Files
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </motion.div>

              {/* Upload Stats */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Files</span>
                  <span className="text-sm font-medium text-gray-900">{uploadedFiles.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Processing</span>
                  <span className="text-sm font-medium text-blue-600">
                    {uploadedFiles.filter(f => f.status === 'processing').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completed</span>
                  <span className="text-sm font-medium text-green-600">
                    {uploadedFiles.filter(f => f.status === 'completed').length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* File List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Files</h2>
              
              {uploadedFiles.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No files uploaded yet</h3>
                  <p className="text-gray-500">Upload your first document to get started with AI analysis</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {uploadedFiles.map((file) => (
                      <motion.div
                        key={file.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-8 w-8 text-gray-400" />
                            <div>
                              <h3 className="font-medium text-gray-900">{file.name}</h3>
                              <p className="text-sm text-gray-500">{file.size}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(file.status)}
                            <span className="text-sm text-gray-600">{getStatusText(file.status)}</span>
                            <button
                              onClick={() => removeFile(file.id)}
                              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {file.status === 'uploading' && (
                          <div className="mt-3">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${file.progress}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{Math.round(file.progress)}% complete</p>
                          </div>
                        )}

                        {/* AI Insights */}
                        {file.status === 'completed' && file.insights && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                          >
                            <div className="flex items-center mb-3">
                              <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
                              <h4 className="font-medium text-gray-900">AI Insights</h4>
                            </div>
                            <ul className="space-y-2">
                              {file.insights.map((insight, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  {insight}
                                </li>
                              ))}
                            </ul>
                            <div className="flex items-center space-x-2 mt-4">
                              <button className="flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                <Eye className="h-4 w-4 mr-1" />
                                View Analysis
                              </button>
                              <button className="flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                <Download className="h-4 w-4 mr-1" />
                                Download Report
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI Analysis Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Brain className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Analysis</h3>
              <p className="text-gray-600">AI analyzes document structure, key themes, and writing quality.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Search className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Citation Detection</h3>
              <p className="text-gray-600">Automatically identifies and suggests relevant citations and references.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Insights</h3>
              <p className="text-gray-600">Provides detailed analytics and recommendations for improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 