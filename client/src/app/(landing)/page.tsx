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
  ChartBarIcon
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

            {/* Process Steps */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {[
                { step: 1, title: 'Research', desc: 'Define your research goals' },
                { step: 2, title: 'Plan', desc: 'Review AI proposals' },
                { step: 3, title: 'Execute', desc: 'AI executes research tasks' },
                { step: 4, title: 'Publish', desc: 'Review and publish results' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
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
