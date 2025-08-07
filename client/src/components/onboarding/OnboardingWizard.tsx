'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon, UserIcon, DocumentTextIcon, LightBulbIcon, CogIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { Brain } from 'lucide-react';

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
    { id: 0, title: 'Personal Information', description: 'Tell us about yourself', icon: UserIcon },
    { id: 1, title: 'Academic Details', description: 'Your educational background', icon: Brain },
    { id: 2, title: 'Research Information', description: 'Your thesis and research', icon: DocumentTextIcon },
    { id: 3, title: 'Research Interests', description: 'What you want to explore', icon: LightBulbIcon },
    { id: 4, title: 'Tools & Help', description: 'Your preferences and needs', icon: CogIcon },
    { id: 5, title: 'Documents', description: 'Upload your files', icon: DocumentIcon },
    { id: 6, title: 'Review & Submit', description: 'Final confirmation', icon: CheckIcon }
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

      const response = await fetch('http://localhost:5002/api/onboarding', {
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@university.edu"
                  required
                />
              </div>
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University/Institution *
                </label>
                <input
                  type="text"
                  value={formData.university}
                  onChange={(e) => handleInputChange('university', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your university name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Degree Type *
                </label>
                <select
                  value={formData.degreeType}
                  onChange={(e) => handleInputChange('degreeType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Select degree type</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Major/Field of Study *
                </label>
                <input
                  type="text"
                  value={formData.major}
                  onChange={(e) => handleInputChange('major', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., Computer Science"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enrollment Year *
                  </label>
                  <input
                    type="number"
                    value={formData.enrollmentYear}
                    onChange={(e) => handleInputChange('enrollmentYear', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="2020"
                    min="1900"
                    max={new Date().getFullYear()}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Graduation Year *
                  </label>
                  <input
                    type="number"
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="2024"
                    min="1900"
                    max="2100"
                    required
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thesis/Research Title
                </label>
                <input
                  type="text"
                  value={formData.thesisTitle}
                  onChange={(e) => handleInputChange('thesisTitle', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your research title (if known)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supervisor Name
                </label>
                <input
                  type="text"
                  value={formData.supervisorName}
                  onChange={(e) => handleInputChange('supervisorName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your supervisor's name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Research Stage
                </label>
                <select
                  value={formData.thesisStage}
                  onChange={(e) => handleInputChange('thesisStage', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select stage</option>
                  <option value="Planning">Planning</option>
                  <option value="Literature Review">Literature Review</option>
                  <option value="Data Collection">Data Collection</option>
                  <option value="Analysis">Analysis</option>
                  <option value="Writing">Writing</option>
                  <option value="Final Review">Final Review</option>
                </select>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Research Interests
              </label>
              <textarea
                value={formData.researchInterests}
                onChange={(e) => handleInputChange('researchInterests', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                rows={4}
                placeholder="Describe your research interests and areas you want to explore..."
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tools You're Familiar With
                </label>
                <textarea
                  value={formData.familiarTools}
                  onChange={(e) => handleInputChange('familiarTools', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  rows={3}
                  placeholder="e.g., Python, R, SPSS, LaTeX, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What Kind of Help Do You Need?
                </label>
                <textarea
                  value={formData.helpNeeded}
                  onChange={(e) => handleInputChange('helpNeeded', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  rows={3}
                  placeholder="Describe what kind of assistance you're looking for..."
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="publishPlans"
                  checked={formData.publishPlans}
                  onChange={(e) => handleInputChange('publishPlans', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="publishPlans" className="text-sm text-gray-700">
                  I plan to publish my research
                </label>
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="hasDocuments"
                  checked={formData.hasDocuments}
                  onChange={(e) => handleInputChange('hasDocuments', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="hasDocuments" className="text-sm text-gray-700">
                  I have documents to upload
                </label>
              </div>
              
              {formData.hasDocuments && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Documents (PDF, DOC, DOCX, TXT, JPG, PNG)
                  </label>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    You can upload up to 5 files, maximum 10MB each
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Your Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700">Personal Information</h4>
                  <p className="text-sm text-gray-600">{formData.fullName}</p>
                  <p className="text-sm text-gray-600">{formData.email}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Academic Details</h4>
                  <p className="text-sm text-gray-600">{formData.university}</p>
                  <p className="text-sm text-gray-600">{formData.degreeType} in {formData.major}</p>
                  <p className="text-sm text-gray-600">{formData.enrollmentYear} - {formData.graduationYear}</p>
                </div>
                
                {formData.thesisTitle && (
                  <div>
                    <h4 className="font-medium text-gray-700">Research</h4>
                    <p className="text-sm text-gray-600">{formData.thesisTitle}</p>
                    {formData.supervisorName && (
                      <p className="text-sm text-gray-600">Supervisor: {formData.supervisorName}</p>
                    )}
                  </div>
                )}
                
                {formData.researchInterests && (
                  <div>
                    <h4 className="font-medium text-gray-700">Research Interests</h4>
                    <p className="text-sm text-gray-600">{formData.researchInterests}</p>
                  </div>
                )}
              </div>
              
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{submitError}</p>
                </div>
              )}
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 text-sm">Onboarding completed successfully!</p>
                </div>
              )}
            </div>
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
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckIcon className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to IntelliThesis!</h2>
          <p className="text-gray-600 mb-6">
            Your onboarding has been completed successfully. We'll get back to you soon with personalized recommendations.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Go to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="ml-3 text-3xl font-bold text-gray-900">IntelliThesis</h1>
            </div>
            <p className="text-gray-600 text-lg">Complete your onboarding to get started</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Step Indicators */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <div key={step.id} className="flex flex-col items-center">
                                         <motion.div
                       className={`w-10 h-10 rounded-full flex items-center justify-center ${
                         isActive ? 'bg-blue-600 text-white' : 
                         isCompleted ? 'bg-green-500 text-white' : 
                         'bg-gray-200 text-gray-500'
                       }`}
                       whileHover={{ scale: 1.1 }}
                       transition={{ duration: 0.2 }}
                     >
                       {isCompleted ? (
                         <CheckIcon className="h-5 w-5" />
                       ) : step.icon === Brain ? (
                         <Brain className="h-5 w-5" />
                       ) : (
                         <StepIcon className="h-5 w-5" />
                       )}
                     </motion.div>
                    <span className={`text-xs mt-2 text-center ${
                      isActive ? 'text-blue-600 font-medium' : 
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
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-gray-600">{steps[currentStep].description}</p>
            </div>

            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeftIcon className="h-5 w-5 mr-2" />
                Previous
              </button>

              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Complete Onboarding
                      <ChevronRightIcon className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  Next
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
