'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  ShieldCheckIcon
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
  Star
} from 'lucide-react';
import { getAllStreams } from '@/types/streams';

// Testimonials data
const testimonials = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'Research Director',
    institution: 'MIT',
    content: 'IntelliThesis has revolutionized how we approach research collaboration. The AI-powered insights are invaluable.'
  },
  {
    id: '2',
    name: 'Prof. Michael Rodriguez',
    role: 'Professor',
    institution: 'Stanford University',
    content: 'The platform\'s intuitive interface and comprehensive tools have significantly accelerated our research workflow.'
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    role: 'Lead Researcher',
    institution: 'Harvard University',
    content: 'The collaborative features and real-time updates have transformed our research methodology completely.'
  }
];

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStreams, setFilteredStreams] = useState(getAllStreams());
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
      // Navigate to streams page with search query
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Brain':
        return Brain;
      case 'Atom':
        return Atom;
      case 'Flask':
        return TestTube;
      case 'Globe':
        return Globe;
      default:
        return Globe;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Advanced 3D Animations */}
      <section className="relative overflow-hidden py-20">
        {/* 3D AI Animation Background */}
        <div className="absolute inset-0">
          {/* Floating AI particles */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-1500"></div>
          
          {/* Neural network connections */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-200"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* 3D floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Explore Global
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Research Topics
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Discover cutting-edge research across all academic disciplines with AI-powered insights and collaborative tools
            </motion.p>

            {/* Search Bar */}
            <motion.form
              className="max-w-2xl mx-auto mb-8"
              variants={itemVariants}
              onSubmit={handleSearch}
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search research streams, topics, or disciplines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="block w-full pl-12 pr-20 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.form>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="/streams"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Get Started
              </Link>
              <Link
                href="/about"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Streams Section with Enhanced UI */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Research Streams
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Explore cutting-edge research across diverse academic disciplines with AI-powered insights
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredStreams.map((stream, index) => {
              const IconComponent = getIconComponent(stream.icon);

              return (
                <motion.div
                  key={stream.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* 3D Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>

                  <div className="relative z-10">
                    {/* Icon with 3D Effect */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${stream.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {stream.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                      {stream.description}
                    </p>

                    {/* Enhanced Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {stream.stats.papers.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Papers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">
                          {stream.stats.researchers.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Researchers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {stream.stats.institutions.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Institutions</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/streams/${stream.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                    >
                      <span>Explore Topics</span>
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results Message */}
          {filteredStreams.length === 0 && searchQuery && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                No research streams found for "{searchQuery}"
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Trusted by Researchers Worldwide
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Join thousands of researchers who trust IntelliThesis
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.institution}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold">IntelliThesis</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Empowering researchers worldwide with AI-driven insights and collaborative tools for academic excellence.
              </p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <UserGroupIcon className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <ShieldCheckIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
                <li><Link href="/streams" className="text-gray-400 hover:text-white transition-colors duration-300">Research Streams</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 IntelliThesis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
