'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GlobeAltIcon,
  CpuChipIcon,
  BeakerIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  StarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  PlayIcon,
  CheckCircleIcon,
  SparklesIcon,
  BoltIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { 
  Code2,
  Brain,
  Atom,
  TestTube,
  Globe,
  Zap,
  Target,
  BarChart3,
  Award,
  Clock,
  Eye,
  Sparkles,
  Lightbulb,
  BookOpen,
  Users,
  TrendingUp,
  ChevronRight,
  Play,
  Download,
  Share2,
  Star,
  CheckCircle,
  Terminal,
  GitBranch,
  Database,
  Cloud,
  Shield,
  Cpu,
  Server
} from 'lucide-react';
import { getAllStreams } from '@/types/streams';

// Enhanced testimonials data
const testimonials = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'Research Director',
    institution: 'MIT',
    content: 'IntelliThesis has revolutionized how we approach research collaboration. The AI-powered insights are invaluable.',
    avatar: '/avatars/sarah.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Prof. Michael Rodriguez',
    role: 'Professor',
    institution: 'Stanford University',
    content: 'The platform\'s intuitive interface and comprehensive tools have significantly accelerated our research workflow.',
    avatar: '/avatars/michael.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    role: 'Lead Researcher',
    institution: 'Harvard University',
    content: 'The collaborative features and real-time updates have transformed our research methodology completely.',
    avatar: '/avatars/emily.jpg',
    rating: 5
  }
];

// Features data
const features = [
  {
    icon: Brain,
    title: 'AI-Powered Research Assistant',
    description: 'Get intelligent suggestions and insights for your research projects',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Code2,
    title: 'Code Analysis & Generation',
    description: 'Advanced code analysis and generation for research applications',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Comprehensive data processing and analysis tools',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Seamless integration with Git and version control systems',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Server,
    title: 'Cloud Integration',
    description: 'Deploy and scale your research applications in the cloud',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Enterprise-grade security for sensitive research data',
    color: 'from-red-500 to-orange-600'
  }
];

// Use cases data
const useCases = [
  {
    title: 'Code Migration & Refactors',
    description: 'Language migrations, version upgrades, codebase restructuring',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Data Engineering & Analysis',
    description: 'Data warehouse migrations, ETL development, data cleaning',
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Research Automation',
    description: 'Automate repetitive research tasks and data collection',
    icon: Cog6ToothIcon,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Collaborative Research',
    description: 'Real-time collaboration tools for research teams',
    icon: Users,
    color: 'from-orange-500 to-red-500'
  }
];

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStreams, setFilteredStreams] = useState(getAllStreams());
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const streams = getAllStreams();

  // Filter streams based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredStreams(streams);
    } else {
      const filtered = streams.filter(stream =>
        stream.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStreams(filtered);
    }
  }, [searchQuery, streams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/streams?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6
      }
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'Code2': Code2,
      'Brain': Brain,
      'Atom': Atom,
      'TestTube': TestTube,
      'Globe': Globe,
      'Zap': Zap,
      'Target': Target,
      'BarChart3': BarChart3,
      'Award': Award,
      'Clock': Clock,
      'Eye': Eye,
      'Sparkles': Sparkles,
      'Lightbulb': Lightbulb,
      'BookOpen': BookOpen,
      'Users': Users,
      'TrendingUp': TrendingUp,
      'ChevronRight': ChevronRight,
      'Play': Play,
      'Download': Download,
      'Share2': Share2,
      'Star': Star
    };
    return iconMap[iconName] || Code2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                IntelliThesis, the AI
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Research Platform
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crush your research backlog with your personal AI research team.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href="/onboarding"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 text-lg shadow-lg"
                >
                  Start Building
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-lg shadow-lg"
                >
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Infinite Process Flow Animation */}
            <motion.div
              className="relative grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {/* Animated Connecting Wire - Horizontal for Desktop, Vertical for Mobile */}
              <motion.div
                className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-emerald-500 rounded-full hidden md:block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Vertical Connecting Wire for Mobile */}
              <motion.div
                className="absolute left-1/2 top-6 bottom-6 w-2 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-emerald-500 rounded-full md:hidden z-10"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Animated Flow Indicator - Horizontal for Desktop */}
              <motion.div
                className="absolute top-5 w-4 h-4 bg-green-400 rounded-full shadow-lg z-20 hidden md:block"
                animate={{ 
                  x: [0, 250, 500, 750, 0],
                  scale: [1, 1.3, 1, 1.3, 1],
                  backgroundColor: [
                    "rgb(59, 130, 246)", // blue-500 (Research)
                    "rgb(147, 51, 234)", // purple-600 (Plan)
                    "rgb(34, 197, 94)", // green-500 (Execute)
                    "rgb(16, 185, 129)", // emerald-500 (Publish)
                    "rgb(59, 130, 246)"  // blue-500 (back to Research)
                  ]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Animated Flow Indicator - Vertical for Mobile */}
              <motion.div
                className="absolute left-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg z-20 md:hidden"
                animate={{ 
                  y: [0, 100, 200, 300, 0],
                  scale: [1, 1.3, 1, 1.3, 1],
                  backgroundColor: [
                    "rgb(59, 130, 246)", // blue-500 (Research)
                    "rgb(147, 51, 234)", // purple-600 (Plan)
                    "rgb(34, 197, 94)", // green-500 (Execute)
                    "rgb(16, 185, 129)", // emerald-500 (Publish)
                    "rgb(59, 130, 246)"  // blue-500 (back to Research)
                  ]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulse Effect for Active Step - Horizontal for Desktop */}
              <motion.div
                className="absolute top-6 w-12 h-12 rounded-full border-2 border-blue-500 opacity-0 hidden md:block"
                animate={{ 
                  x: [0, 250, 500, 750, 0],
                  scale: [0, 1, 0, 1, 0],
                  opacity: [0, 0.3, 0, 0.3, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulse Effect for Active Step - Vertical for Mobile */}
              <motion.div
                className="absolute left-1/2 w-12 h-12 rounded-full border-2 border-blue-500 opacity-0 md:hidden"
                animate={{ 
                  y: [0, 100, 200, 300, 0],
                  scale: [0, 1, 0, 1, 0],
                  opacity: [0, 0.3, 0, 0.3, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {[
                { 
                  step: 1, 
                  title: 'Research', 
                  desc: 'Define your research goals'
                },
                { 
                  step: 2, 
                  title: 'Plan', 
                  desc: 'Review AI proposals'
                },
                { 
                  step: 3, 
                  title: 'Execute', 
                  desc: 'AI executes research tasks'
                },
                { 
                  step: 4, 
                  title: 'Publish', 
                  desc: 'Review and publish results'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative z-10 shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    animate={{ 
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                      ],
                      background: [
                        "linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))", // blue
                        index === 0 ? "linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))" : // blue
                        index === 1 ? "linear-gradient(to right, rgb(147, 51, 234), rgb(126, 34, 206))" : // purple
                        index === 2 ? "linear-gradient(to right, rgb(34, 197, 94), rgb(22, 163, 74))" : // green
                        index === 3 ? "linear-gradient(to right, rgb(16, 185, 129), rgb(5, 150, 105))" : // emerald
                        "linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))" // back to blue
                      ]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      delay: index * 2
                    }}
                  >
                    {item.step}
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-gray-900 dark:text-white mb-1"
                    animate={{
                      color: [
                        "rgb(17, 24, 39)", // gray-900
                        index === 0 ? "rgb(59, 130, 246)" : // blue
                        index === 1 ? "rgb(147, 51, 234)" : // purple
                        index === 2 ? "rgb(34, 197, 94)" : // green
                        index === 3 ? "rgb(16, 185, 129)" : // emerald
                        "rgb(17, 24, 39)"  // gray-900
                      ]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      delay: index * 2
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Streams Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Popular Research Streams
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore trending research areas and discover new opportunities for collaboration
            </p>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search research streams, topics, or disciplines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="block w-full pl-12 pr-20 py-4 sm:py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg text-base sm:text-lg"
                />
                <motion.button
                  type="submit"
                  className="absolute inset-y-0 right-0 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Enhanced Streams Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStreams.slice(0, 6).map((stream, index) => {
              const IconComponent = getIconComponent(stream.icon);
              return (
                <motion.div
                  key={stream.slug}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {stream.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {stream.stats.papers.toLocaleString()} papers
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                    {stream.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {stream.stats.researchers.toLocaleString()}+
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {stream.stats.institutions}+ institutions
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={`/streams/${stream.slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        Explore
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Streams Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/streams"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 text-lg shadow-lg"
              >
                View All Streams
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built for collaboration and can learn to fit into your unique research workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From implementing new features to fixing research bottlenecks, IntelliThesis can clear your backlog
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glass Effect Image Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Glass Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-indigo-900/60 backdrop-blur-sm"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ animationDelay: '2s' }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-64 h-64 bg-indigo-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Research Collaboration
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join thousands of researchers worldwide who are already transforming their work with AI-powered insights and collaborative tools
            </motion.p>
            
            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: '50K+', label: 'Active Researchers', icon: Users },
                { number: '1M+', label: 'Papers Analyzed', icon: DocumentTextIcon },
                { number: '500+', label: 'Institutions', icon: BuildingOfficeIcon }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-200 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/onboarding"
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300 text-lg border border-white/30 hover:border-white/50"
                >
                  Start Your Research Journey
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Leading Researchers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our customers about their experience with IntelliThesis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of researchers who are already using IntelliThesis to accelerate their work
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 text-lg shadow-lg"
              >
                Get Started Free
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-lg shadow-lg"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
