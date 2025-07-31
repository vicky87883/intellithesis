'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  FileText, 
  Search, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Shield,
  Users
} from 'lucide-react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your research and provide intelligent insights."
    },
    {
      icon: FileText,
      title: "Smart Document Processing",
      description: "Upload and process academic papers, theses, and research documents with ease."
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Find relevant research papers and citations using our AI-powered search engine."
    },
    {
      icon: Sparkles,
      title: "Content Generation",
      description: "Generate high-quality thesis content with AI assistance and human oversight."
    }
  ];

  const benefits = [
    "Advanced AI algorithms for thesis analysis",
    "Real-time collaboration with research teams",
    "Secure cloud-based document storage",
    "Integration with academic databases",
    "Automated citation and reference management",
    "24/7 AI-powered research assistance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">IntelliThesis</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
              <a href="/chat" className="text-gray-600 hover:text-blue-600 transition-colors">AI Chat</a>
              <a href="/upload" className="text-gray-600 hover:text-blue-600 transition-colors">Upload</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="text-blue-600"> Thesis</span>
                <br />
                Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your academic research with cutting-edge AI technology. 
                Analyze documents, generate insights, and create compelling theses with intelligent assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Start Your Thesis
                  <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leverage the latest in artificial intelligence to enhance your academic research and thesis writing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose IntelliThesis?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered platform combines cutting-edge technology with academic excellence to help you create outstanding research.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">AI-Powered Insights</h3>
                </div>
                <p className="text-blue-100 mb-6">
                  Get instant insights from your research data with our advanced AI algorithms.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-blue-200 text-sm">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-blue-200 text-sm">Availability</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who are already using IntelliThesis to create better academic work.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => window.location.href = '/dashboard'}
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">IntelliThesis</span>
              </div>
              <p className="text-gray-400">
                Advanced AI-powered thesis writing and research assistant.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IntelliThesis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
