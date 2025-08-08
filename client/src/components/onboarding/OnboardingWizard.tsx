'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  CheckIcon, 
  UserIcon, 
  DocumentTextIcon, 
  LightBulbIcon, 
  CogIcon, 
  DocumentIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  CalendarIcon,
  BookOpenIcon,
  UserGroupIcon,
  SparklesIcon,
  CloudArrowUpIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import { Brain, GraduationCap, FileText, Users, Target, Upload, CheckCircle } from 'lucide-react';

interface OnboardingData {
  fullName: string;
  email: string;
  university: string;
  degreeType: string;
  major: string;
  enrollmentYear: string;
  graduationYear: string;
  thesisTitle?: string;
  supervisorName?: string;
  thesisStage?: string;
  researchInterests?: string;
  familiarTools?: string;
  helpNeeded?: string;
  publishPlans: boolean;
  hasDocuments: boolean;
  documents?: File[];
}

const OnboardingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<OnboardingData>({
    fullName: '',
    email: '',
    university: '',
    degreeType: '',
    major: '',
    enrollmentYear: '',
    graduationYear: '',
    thesisTitle: '',
    supervisorName: '',
    thesisStage: '',
    researchInterests: '',
    familiarTools: '',
    helpNeeded: '',
    publishPlans: false,
    hasDocuments: false,
    documents: []
  });

  const steps = [
    { 
      id: 0, 
      title: 'Personal Information', 
      description: 'Tell us about yourself', 
      icon: UserIcon,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 1, 
      title: 'Academic Details', 
      description: 'Your educational background', 
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      id: 2, 
      title: 'Research Information', 
      description: 'Your thesis and research', 
      icon: FileText,
      color: 'from-green-500 to-green-600'
    },
    { 
      id: 3, 
      title: 'Research Interests', 
      description: 'What you want to explore', 
      icon: Target,
      color: 'from-orange-500 to-orange-600'
    },
    { 
      id: 4, 
      title: 'Tools & Help', 
      description: 'Your preferences and needs', 
      icon: CogIcon,
      color: 'from-red-500 to-red-600'
    },
    { 
      id: 5, 
      title: 'Documents', 
      description: 'Upload your files', 
      icon: Upload,
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      id: 6, 
      title: 'Review & Submit', 
      description: 'Final confirmation', 
      icon: CheckCircle,
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const handleInputChange = (field: keyof OnboardingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData(prev => ({ ...prev, documents: fileArray }));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'documents' && value !== undefined) {
          formDataToSend.append(key, value.toString());
        }
      });

      // Add files
      if (formData.documents) {
        formData.documents.forEach((file, index) => {
          formDataToSend.append('documents', file);
        });
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002'}/api/onboarding`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSubmitSuccess(true);
      console.log('Onboarding submitted successfully:', result);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit onboarding data');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
                <UserIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to IntelliThesis!</h3>
              <p className="text-gray-600">Let's start by getting to know you better</p>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg"
                    placeholder="Enter your full name"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg"
                    placeholder="your.email@university.edu"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Background</h3>
              <p className="text-gray-600">Tell us about your educational journey</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors">
                  University/Institution *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) => handleInputChange('university', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-lg"
                    placeholder="Your university name"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AcademicCapIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors">
                  Degree Type *
                </label>
                <div className="relative">
                  <select
                    value={formData.degreeType}
                    onChange={(e) => handleInputChange('degreeType', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-lg appearance-none"
                    required
                  >
                    <option value="">Select degree type</option>
                    <option value="Bachelor's">Bachelor's Degree</option>
                    <option value="Master's">Master's Degree</option>
                    <option value="PhD">PhD/Doctorate</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <GraduationCap className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors">
                  Major/Field of Study *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.major}
                    onChange={(e) => handleInputChange('major', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-lg"
                    placeholder="e.g., Computer Science, Physics, Literature"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <BookOpenIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors">
                    Enrollment Year *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.enrollmentYear}
                      onChange={(e) => handleInputChange('enrollmentYear', e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-lg"
                      placeholder="2020"
                      min="1900"
                      max={new Date().getFullYear()}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors">
                    Graduation Year *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-lg"
                      placeholder="2024"
                      min="1900"
                      max="2100"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Research Information</h3>
              <p className="text-gray-600">Tell us about your thesis or research project</p>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-green-600 transition-colors">
                  Thesis/Research Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.thesisTitle}
                    onChange={(e) => handleInputChange('thesisTitle', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 text-lg"
                    placeholder="Your research title (if known)"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-green-600 transition-colors">
                  Supervisor Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.supervisorName}
                    onChange={(e) => handleInputChange('supervisorName', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 text-lg"
                    placeholder="Your supervisor's name"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <UserGroupIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-green-600 transition-colors">
                  Current Research Stage
                </label>
                <div className="relative">
                  <select
                    value={formData.thesisStage}
                    onChange={(e) => handleInputChange('thesisStage', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 text-lg appearance-none"
                  >
                    <option value="">Select your current stage</option>
                    <option value="Planning">Planning Phase</option>
                    <option value="Literature Review">Literature Review</option>
                    <option value="Data Collection">Data Collection</option>
                    <option value="Analysis">Analysis Phase</option>
                    <option value="Writing">Writing Phase</option>
                    <option value="Revision">Revision Phase</option>
                    <option value="Final Submission">Final Submission</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <SparklesIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Research Interests</h3>
              <p className="text-gray-600">What areas are you passionate about exploring?</p>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                  Research Interests & Topics
                </label>
                <div className="relative">
                  <textarea
                    value={formData.researchInterests}
                    onChange={(e) => handleInputChange('researchInterests', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 text-lg resize-none"
                    placeholder="Describe your research interests, topics you're passionate about, or areas you want to explore..."
                    rows={4}
                  />
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <LightBulbIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">This helps us personalize your experience</p>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4">
                <CogIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tools & Help</h3>
              <p className="text-gray-600">What tools do you use and how can we help?</p>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-red-600 transition-colors">
                  Familiar Tools & Technologies
                </label>
                <div className="relative">
                  <textarea
                    value={formData.familiarTools}
                    onChange={(e) => handleInputChange('familiarTools', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 text-lg resize-none"
                    placeholder="e.g., Python, R, MATLAB, LaTeX, SPSS, NVivo, etc."
                    rows={3}
                  />
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <CogIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-red-600 transition-colors">
                  How Can We Help You?
                </label>
                <div className="relative">
                  <textarea
                    value={formData.helpNeeded}
                    onChange={(e) => handleInputChange('helpNeeded', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 text-lg resize-none"
                    placeholder="What specific help do you need? e.g., literature review, data analysis, writing assistance, etc."
                    rows={4}
                  />
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="publishPlans"
                    checked={formData.publishPlans}
                    onChange={(e) => handleInputChange('publishPlans', e.target.checked)}
                    className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <label htmlFor="publishPlans" className="text-sm font-medium text-gray-700">
                    I plan to publish my research
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-4">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Document Upload</h3>
              <p className="text-gray-600">Upload any relevant documents to help us understand your research better</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <input
                  type="checkbox"
                  id="hasDocuments"
                  checked={formData.hasDocuments}
                  onChange={(e) => handleInputChange('hasDocuments', e.target.checked)}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                />
                <label htmlFor="hasDocuments" className="text-sm font-medium text-gray-700">
                  I have documents to upload
                </label>
              </div>

              {formData.hasDocuments && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4"
                >
                  <div className="border-2 border-dashed border-indigo-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors">
                    <CloudArrowUpIcon className="mx-auto h-12 w-12 text-indigo-400 mb-4" />
                    <div className="text-lg font-medium text-gray-900 mb-2">Upload Documents</div>
                    <p className="text-gray-600 mb-4">Drag and drop files here, or click to browse</p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer transition-colors"
                    >
                      Choose Files
                    </label>
                  </div>
                  
                  {formData.documents && formData.documents.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Selected Files:</h4>
                      {formData.documents.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Review & Submit</h3>
              <p className="text-gray-600">Please review your information before submitting</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <p className="text-sm text-gray-600">{formData.fullName}</p>
                  <p className="text-sm text-gray-600">{formData.email}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Academic Details</h4>
                  <p className="text-sm text-gray-600">{formData.university}</p>
                  <p className="text-sm text-gray-600">{formData.degreeType} in {formData.major}</p>
                </div>
                {formData.thesisTitle && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Research</h4>
                    <p className="text-sm text-gray-600">{formData.thesisTitle}</p>
                  </div>
                )}
                {formData.researchInterests && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                    <p className="text-sm text-gray-600">{formData.researchInterests}</p>
                  </div>
                )}
              </div>
              
              {formData.documents && formData.documents.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Documents</h4>
                  <p className="text-sm text-gray-600">{formData.documents.length} file(s) selected</p>
                </div>
              )}
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">{submitError}</p>
              </div>
            )}
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
        >
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to IntelliThesis!</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Your onboarding has been completed successfully. We'll get back to you soon with personalized recommendations.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-lg font-semibold"
          >
            Go to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h1 className="ml-4 text-4xl font-bold text-gray-900">IntelliThesis</h1>
            </div>
            <p className="text-gray-600 text-xl">Complete your onboarding to get started</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-700">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-lg text-gray-500">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Step Indicators */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive ? `bg-gradient-to-r ${step.color} text-white shadow-lg` : 
                        isCompleted ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' : 
                        'bg-gray-200 text-gray-500'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isCompleted ? (
                        <CheckIcon className="h-6 w-6" />
                      ) : (
                        <StepIcon className="h-6 w-6" />
                      )}
                    </motion.div>
                    <span className={`text-sm mt-2 text-center font-medium ${
                      isActive ? 'text-gray-900' : 
                      isCompleted ? 'text-green-600' : 
                      'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <motion.button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center px-8 py-4 rounded-xl transition-all duration-200 font-semibold ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-md'
                }`}
                whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
                whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
              >
                <ChevronLeftIcon className="h-6 w-6 mr-2" />
                Previous
              </motion.button>

              {currentStep === steps.length - 1 ? (
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Complete Onboarding
                      <ChevronRightIcon className="h-6 w-6 ml-2" />
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.button
                  onClick={nextStep}
                  className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next
                  <ChevronRightIcon className="h-6 w-6 ml-2" />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
