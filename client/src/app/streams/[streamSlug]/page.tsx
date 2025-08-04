'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSession, signIn } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  Code2, 
  Brain, 
  Lightbulb, 
  BookOpen, 
  Users, 
  TrendingUp,
  ChevronRight,
  Play,
  Download,
  Share2,
  Star,
  Atom,
  TestTube,
  Globe,
  Zap,
  Target,
  BarChart3,
  Award,
  Clock,
  Eye
} from 'lucide-react';
import { getStreamBySlug } from '@/types/streams';
import Navbar from '@/components/layout/Navbar';
import CodeEditor from '@/components/CodeEditor';

export default function StreamPage() {
  const [stream, setStream] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const streamSlug = params?.streamSlug as string;

  useEffect(() => {
    if (!streamSlug) {
      setError('No stream specified');
      setIsLoading(false);
      return;
    }

    console.log('Loading stream:', streamSlug);
    const streamData = getStreamBySlug(streamSlug);
    console.log('Stream data:', streamData);
    
    if (!streamData) {
      console.log('Stream not found');
      setError('Stream not found');
      setIsLoading(false);
      return;
    }
    
    setStream(streamData);
    setIsLoading(false);
  }, [streamSlug]);

  const handleSignIn = () => {
    signIn(undefined, { callbackUrl: '/dashboard' });
  };

  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Brain':
        return <Brain className="w-6 h-6" />;
      case 'Atom':
        return <Atom className="w-6 h-6" />;
      case 'Flask':
        return <TestTube className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  const codeSnippets = {
    'computer-science': {
      python: `# Machine Learning Example
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load and prepare data
data = pd.read_csv('research_data.csv')
X = data.drop('target', axis=1)
y = data['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Model accuracy: {accuracy:.2f}")`,
      
      javascript: `// Neural Network Implementation
class NeuralNetwork {
  constructor(layers) {
    this.layers = layers;
    this.weights = [];
    this.biases = [];
    
    for (let i = 0; i < layers.length - 1; i++) {
      this.weights.push(
        Array(layers[i + 1]).fill().map(() =>
          Array(layers[i]).fill().map(() => Math.random() * 2 - 1)
        )
      );
      this.biases.push(Array(layers[i + 1]).fill().map(() => Math.random() * 2 - 1));
    }
  }
  
  forward(input) {
    let current = input;
    for (let i = 0; i < this.weights.length; i++) {
      current = this.weights[i].map((weights, j) =>
        weights.reduce((sum, weight, k) => sum + weight * current[k], 0) + this.biases[i][j]
      );
      current = current.map(x => 1 / (1 + Math.exp(-x))); // Sigmoid
    }
    return current;
  }
}

// Usage
const nn = new NeuralNetwork([2, 3, 1]);
const result = nn.forward([0.5, 0.8]);
console.log('Prediction:', result);`,
      
      java: `// Algorithm Analysis Example
public class AlgorithmAnalysis {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.println("Original array:");
        printArray(arr);
        
        quickSort(arr, 0, arr.length - 1);
        
        System.out.println("\\nSorted array:");
        printArray(arr);
    }
    
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}`
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading stream...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !stream) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {error || 'Stream Not Found'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {error || 'The requested stream could not be found.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <motion.div
        className="pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section with 3D-like Background */}
        <motion.section 
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800"
          variants={itemVariants}
        >
          {/* 3D-like floating elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Stream Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-white">
                  {getIconComponent(stream.icon)}
                </div>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore {stream.name} Research
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stream.description}
              </motion.p>
              
              {/* Auth Buttons */}
              {!session && (
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    onClick={handleSignIn}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Users className="w-5 h-5" />
                    Sign In
                  </motion.button>
                  <motion.button
                    onClick={handleSignUp}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Star className="w-5 h-5" />
                    Sign Up
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stream Stats */}
          <motion.section 
            className="mb-16"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-8 h-8" />
                  <div>
                    <p className="text-2xl font-bold">{stream.stats.papers.toLocaleString()}</p>
                    <p className="text-blue-100">Research Papers</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8" />
                  <div>
                    <p className="text-2xl font-bold">{stream.stats.researchers.toLocaleString()}</p>
                    <p className="text-green-100">Active Researchers</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <p className="text-2xl font-bold">{stream.stats.institutions.toLocaleString()}</p>
                    <p className="text-purple-100">Institutions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Research Topics with 3D Cards */}
          <motion.section 
            className="mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Trending Research Topics
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stream.featuredTopics.map((topic: any, index: number) => (
                <motion.div
                  key={topic.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* 3D-like gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stream.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {topic.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {topic.papers.toLocaleString()} papers
                      </span>
                      <motion.button
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Explore <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Interactive Code Editor for Computer Science */}
          {stream.slug === 'computer-science' && (
            <motion.section 
              className="mb-16"
              variants={itemVariants}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Interactive Code Examples
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Explore and experiment with real code examples from Computer Science research. 
                    Run code directly in your browser and see the results instantly.
                  </p>
                </div>

                {/* Language Tabs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Python Example */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Machine Learning with Python
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        A practical example of machine learning using scikit-learn
                      </p>
                    </div>
                    <CodeEditor
                      language="python"
                      defaultValue={codeSnippets['computer-science'].python}
                      height="400px"
                    />
                  </motion.div>

                  {/* JavaScript Example */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Neural Network Implementation
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        A simple neural network implementation in JavaScript
                      </p>
                    </div>
                    <CodeEditor
                      language="javascript"
                      defaultValue={codeSnippets['computer-science'].javascript}
                      height="400px"
                    />
                  </motion.div>

                  {/* Java Example */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="lg:col-span-2"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Algorithm Analysis - Quick Sort
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Implementation and analysis of the Quick Sort algorithm
                      </p>
                    </div>
                    <CodeEditor
                      language="java"
                      defaultValue={codeSnippets['computer-science'].java}
                      height="500px"
                    />
                  </motion.div>
                </div>

                {/* Additional Features */}
                <motion.div
                  className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Play className="w-6 h-6" />
                      <h4 className="font-semibold">Real-time Execution</h4>
                    </div>
                    <p className="text-blue-100 text-sm">
                      Run code instantly and see results in real-time with our advanced code execution engine.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Download className="w-6 h-6" />
                      <h4 className="font-semibold">Export & Share</h4>
                    </div>
                    <p className="text-green-100 text-sm">
                      Download your code or share it with others. Perfect for collaborative learning.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Code2 className="w-6 h-6" />
                      <h4 className="font-semibold">Multiple Languages</h4>
                    </div>
                    <p className="text-purple-100 text-sm">
                      Support for Python, JavaScript, Java, C++, and many more programming languages.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.section>
          )}

          {/* 3D Visual Section */}
          <motion.section 
            className="mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* 3D-like background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Visualize {stream.name} Research
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Explore interactive 3D visualizations of research data, molecular structures, and computational models that bring {stream.name.toLowerCase()} concepts to life.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span>Interactive Models</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Target className="w-4 h-4" />
                        <span>Real-time Data</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Zap className="w-4 h-4" />
                        <span>Dynamic Updates</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-2xl">
                          {getIconComponent(stream.icon)}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          3D Visualization Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Call to Action */}
          {!session && (
            <motion.section 
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* 3D-like floating elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-5 left-5 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-5 right-5 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Dive Deeper?
                  </h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of researchers and students exploring {stream.name}. Get access to advanced tools, AI-powered insights, and collaborative features.
                  </p>
                  <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      onClick={handleSignUp}
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Start Your Research Journey
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.section>
          )}
        </div>
      </motion.div>
    </div>
  );
} 