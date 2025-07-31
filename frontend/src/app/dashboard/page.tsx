'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  FileText, 
  Search, 
  Upload, 
  BarChart3, 
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Filter,
  Download,
  Share2
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Documents Processed', value: '1,234', icon: FileText, change: '+12%', color: 'text-blue-600' },
    { title: 'AI Insights Generated', value: '567', icon: Brain, change: '+8%', color: 'text-green-600' },
    { title: 'Research Papers', value: '89', icon: Search, change: '+15%', color: 'text-purple-600' },
    { title: 'Collaborators', value: '12', icon: Users, change: '+3%', color: 'text-orange-600' }
  ];

  const recentDocuments = [
    { name: 'Thesis Chapter 1 - Introduction', status: 'completed', date: '2024-01-15', size: '2.3 MB' },
    { name: 'Research Methodology', status: 'in-progress', date: '2024-01-14', size: '1.8 MB' },
    { name: 'Literature Review', status: 'pending', date: '2024-01-13', size: '3.1 MB' },
    { name: 'Data Analysis Results', status: 'completed', date: '2024-01-12', size: '4.2 MB' }
  ];

  const aiInsights = [
    { title: 'Citation Analysis', description: 'AI found 15 potential citations for your methodology section', time: '2 hours ago' },
    { title: 'Content Optimization', description: 'Suggested improvements for your introduction paragraph', time: '4 hours ago' },
    { title: 'Research Gap Identified', description: 'AI detected a gap in your literature review', time: '1 day ago' }
  ];

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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Document
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Researcher!</h1>
          <p className="text-gray-600">Here's what's happening with your thesis today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">{stat.change}</span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['overview', 'documents', 'insights', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Documents */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Documents</h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View all</button>
                  </div>
                  <div className="space-y-3">
                    {recentDocuments.map((doc, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.date} • {doc.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {doc.status === 'completed' && <CheckCircle className="h-4 w-4 text-green-500" />}
                          {doc.status === 'in-progress' && <Clock className="h-4 w-4 text-yellow-500" />}
                          {doc.status === 'pending' && <AlertCircle className="h-4 w-4 text-red-500" />}
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            doc.status === 'completed' ? 'bg-green-100 text-green-800' :
                            doc.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View all</button>
                  </div>
                  <div className="space-y-3">
                    {aiInsights.map((insight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                      >
                        <div className="flex items-start">
                          <Brain className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">{insight.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                            <p className="text-xs text-gray-500">{insight.time}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">All Documents</h3>
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </button>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No documents yet</h3>
                  <p className="text-gray-500 mb-4">Upload your first document to get started with AI analysis</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Upload Document
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'insights' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Generated Insights</h3>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No insights yet</h3>
                  <p className="text-gray-500">AI insights will appear here as you upload and process documents</p>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Analytics</h3>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics coming soon</h3>
                  <p className="text-gray-500">Detailed analytics and research metrics will be available here</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <Upload className="h-6 w-6 text-blue-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Upload Document</p>
                <p className="text-sm text-gray-500">Add new research papers</p>
              </div>
            </button>
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <Search className="h-6 w-6 text-blue-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Search Papers</p>
                <p className="text-sm text-gray-500">Find relevant research</p>
              </div>
            </button>
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <Share2 className="h-6 w-6 text-blue-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Share Thesis</p>
                <p className="text-sm text-gray-500">Collaborate with team</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 