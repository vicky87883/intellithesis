'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Globe, 
  Heart,
  ArrowRight,
  Search,
  Building2,
  Sparkles,
  Award,
  Zap
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  isActive: boolean;
  isRemote: boolean;
  createdAt: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showRemoteOnly, setShowRemoteOnly] = useState(false);

  const filterJobs = useCallback(() => {
    let filtered = jobs.filter(job => job.isActive);

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDepartment) {
      filtered = filtered.filter(job => job.department === selectedDepartment);
    }

    if (selectedType) {
      filtered = filtered.filter(job => job.type === selectedType);
    }

    if (selectedLocation) {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    if (showRemoteOnly) {
      filtered = filtered.filter(job => job.isRemote);
    }

    setFilteredJobs(filtered);
  }, [jobs, searchTerm, selectedDepartment, selectedType, selectedLocation, showRemoteOnly]);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [filterJobs]);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/jobs');
      if (response.ok) {
        const data = await response.json();
        setJobs(data.jobs);
      } else {
        console.error('API response not ok:', response.status);
        // Fallback to default jobs if API fails
        setJobs(defaultJobs);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Fallback to default jobs if API fails
      setJobs(defaultJobs);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultJobs: Job[] = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build the next generation of research collaboration tools.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, GCP)',
        'Knowledge of database design and optimization',
        'Experience with microservices architecture'
      ],
      responsibilities: [
        'Design and implement scalable web applications',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Participate in code reviews and technical discussions'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      salary: { min: 120000, max: 180000, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'AI Research Scientist',
      department: 'Research & Development',
      location: 'Remote',
      type: 'full-time',
      experience: '3+ years',
      description: 'Lead cutting-edge AI research to enhance our research assistance capabilities.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with machine learning frameworks',
        'Published research in top-tier conferences',
        'Experience with natural language processing'
      ],
      responsibilities: [
        'Develop novel AI algorithms for research assistance',
        'Publish research papers and patents',
        'Collaborate with academic partners',
        'Mentor junior researchers'
      ],
      benefits: [
        'Competitive salary and equity',
        'Research budget and conference attendance',
        'Flexible work arrangements',
        'Access to cutting-edge computing resources'
      ],
      salary: { min: 150000, max: 220000, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'full-time',
      experience: '4+ years',
      description: 'Drive product strategy and execution for our research platform.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Strong analytical and strategic thinking',
        'Experience with user research and data analysis',
        'Excellent communication and leadership skills'
      ],
      responsibilities: [
        'Define product roadmap and strategy',
        'Work closely with engineering and design teams',
        'Conduct user research and market analysis',
        'Drive product launches and go-to-market strategies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development opportunities'
      ],
      salary: { min: 130000, max: 190000, currency: 'USD' },
      isActive: true,
      isRemote: false,
      createdAt: '2024-01-05'
    },
    {
      id: '4',
      title: 'AI/ML Engineering Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'internship',
      experience: 'Current student',
      description: 'Gain hands-on experience with cutting-edge AI and machine learning technologies.',
      requirements: [
        'Currently pursuing Computer Science, AI, or related degree',
        'Basic knowledge of Python and machine learning',
        'Strong problem-solving and analytical skills',
        'Passion for AI and research technology'
      ],
      responsibilities: [
        'Assist in developing AI algorithms and models',
        'Work on data preprocessing and analysis',
        'Collaborate with senior engineers on research projects',
        'Participate in code reviews and team meetings'
      ],
      benefits: [
        'Competitive internship stipend',
        'Mentorship from senior engineers',
        'Flexible work hours',
        'Potential for full-time conversion'
      ],
      salary: { min: 4000, max: 6000, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-20'
    },
    {
      id: '5',
      title: 'Frontend Development Intern',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'internship',
      experience: 'Current student',
      description: 'Build beautiful and responsive user interfaces for our research platform.',
      requirements: [
        'Currently pursuing Computer Science or related degree',
        'Knowledge of React, JavaScript, and CSS',
        'Understanding of responsive design principles',
        'Creative mindset and attention to detail'
      ],
      responsibilities: [
        'Develop responsive web components',
        'Implement user interface designs',
        'Optimize application performance',
        'Collaborate with design and backend teams'
      ],
      benefits: [
        'Competitive internship stipend',
        'Real-world project experience',
        'Mentorship from senior developers',
        'Networking opportunities'
      ],
      salary: { min: 3500, max: 5500, currency: 'USD' },
      isActive: true,
      isRemote: false,
      createdAt: '2024-01-18'
    },
    {
      id: '6',
      title: 'Research Data Analyst Intern',
      department: 'Research & Development',
      location: 'Remote',
      type: 'internship',
      experience: 'Current student',
      description: 'Analyze research data and contribute to our AI-powered insights platform.',
      requirements: [
        'Currently pursuing Data Science, Statistics, or related degree',
        'Experience with Python, R, or similar tools',
        'Understanding of statistical analysis',
        'Interest in academic research and data visualization'
      ],
      responsibilities: [
        'Analyze research data and trends',
        'Create data visualizations and reports',
        'Assist in developing data-driven insights',
        'Support research team with data processing'
      ],
      benefits: [
        'Competitive internship stipend',
        'Exposure to real research data',
        'Learning opportunities in data science',
        'Potential for research publication'
      ],
      salary: { min: 3800, max: 5800, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-22'
    },
    {
      id: '7',
      title: 'Natural Language Processing Intern',
      department: 'Research & Development',
      location: 'Remote',
      type: 'internship',
      experience: 'Current student',
      description: 'Work on cutting-edge NLP technologies to enhance our research assistance capabilities.',
      requirements: [
        'Currently pursuing Computer Science, Linguistics, or related degree',
        'Basic knowledge of NLP concepts and techniques',
        'Experience with Python and machine learning libraries',
        'Interest in language processing and AI'
      ],
      responsibilities: [
        'Assist in developing NLP models and algorithms',
        'Work on text processing and analysis',
        'Contribute to language model improvements',
        'Research and implement new NLP techniques'
      ],
      benefits: [
        'Competitive internship stipend',
        'Exposure to state-of-the-art NLP technologies',
        'Mentorship from NLP experts',
        'Potential for research publication'
      ],
      salary: { min: 4200, max: 6200, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-25'
    },
    {
      id: '8',
      title: 'UX/UI Design Intern',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'internship',
      experience: 'Current student',
      description: 'Create intuitive and beautiful user experiences for our research platform.',
      requirements: [
        'Currently pursuing Design, HCI, or related degree',
        'Proficiency in design tools (Figma, Sketch, etc.)',
        'Understanding of user-centered design principles',
        'Portfolio demonstrating design skills'
      ],
      responsibilities: [
        'Design user interfaces and user experiences',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and mockups',
        'Collaborate with product and engineering teams'
      ],
      benefits: [
        'Competitive internship stipend',
        'Real-world design experience',
        'Mentorship from senior designers',
        'Portfolio-building opportunities'
      ],
      salary: { min: 3500, max: 5500, currency: 'USD' },
      isActive: true,
      isRemote: false,
      createdAt: '2024-01-23'
    },
    {
      id: '9',
      title: 'DevOps Engineering Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'internship',
      experience: 'Current student',
      description: 'Learn cloud infrastructure and deployment automation for our research platform.',
      requirements: [
        'Currently pursuing Computer Science or related degree',
        'Basic knowledge of Linux and command line',
        'Interest in cloud computing and automation',
        'Understanding of software development lifecycle'
      ],
      responsibilities: [
        'Assist in cloud infrastructure management',
        'Work on CI/CD pipeline automation',
        'Monitor system performance and reliability',
        'Learn about security best practices'
      ],
      benefits: [
        'Competitive internship stipend',
        'Hands-on experience with cloud platforms',
        'Mentorship from DevOps engineers',
        'Exposure to modern deployment practices'
      ],
      salary: { min: 3800, max: 5800, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-26'
    },
    {
      id: '10',
      title: 'Research Operations Intern',
      department: 'Research & Development',
      location: 'New York, NY',
      type: 'internship',
      experience: 'Current student',
      description: 'Support research operations and help optimize our research workflows.',
      requirements: [
        'Currently pursuing Business, Operations, or related degree',
        'Strong organizational and communication skills',
        'Interest in research and academic operations',
        'Proficiency in Microsoft Office and project management tools'
      ],
      responsibilities: [
        'Assist in research project coordination',
        'Help optimize research workflows and processes',
        'Support data collection and analysis',
        'Contribute to research documentation and reporting'
      ],
      benefits: [
        'Competitive internship stipend',
        'Exposure to research operations',
        'Learning opportunities in project management',
        'Networking with research professionals'
      ],
      salary: { min: 3200, max: 5200, currency: 'USD' },
      isActive: true,
      isRemote: false,
      createdAt: '2024-01-24'
    },
    {
      id: '11',
      title: 'Marketing Analytics Intern',
      department: 'Marketing',
      location: 'Remote',
      type: 'internship',
      experience: 'Current student',
      description: 'Analyze marketing data and help optimize our growth strategies.',
      requirements: [
        'Currently pursuing Marketing, Analytics, or related degree',
        'Basic knowledge of analytics tools (Google Analytics, etc.)',
        'Understanding of digital marketing concepts',
        'Strong analytical and communication skills'
      ],
      responsibilities: [
        'Analyze marketing campaign performance',
        'Create data-driven marketing insights',
        'Assist in A/B testing and optimization',
        'Support marketing team with reporting'
      ],
      benefits: [
        'Competitive internship stipend',
        'Real-world marketing analytics experience',
        'Mentorship from marketing professionals',
        'Exposure to growth marketing strategies'
      ],
      salary: { min: 3000, max: 5000, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-27'
    },
    {
      id: '12',
      title: 'Content Strategy Intern',
      department: 'Marketing',
      location: 'Remote',
      type: 'internship',
      experience: 'Current student',
      description: 'Create compelling content that educates and engages our research community.',
      requirements: [
        'Currently pursuing Communications, English, or related degree',
        'Strong writing and editing skills',
        'Interest in research and academic content',
        'Understanding of content marketing principles'
      ],
      responsibilities: [
        'Create blog posts and educational content',
        'Assist in social media content creation',
        'Help develop content marketing strategies',
        'Support community engagement initiatives'
      ],
      benefits: [
        'Competitive internship stipend',
        'Portfolio-building opportunities',
        'Mentorship from content professionals',
        'Exposure to research community'
      ],
      salary: { min: 2800, max: 4800, currency: 'USD' },
      isActive: true,
      isRemote: true,
      createdAt: '2024-01-28'
    }
  ];



  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location))];
  const jobTypes = ['full-time', 'part-time', 'contract', 'internship'];

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
      transition: { duration: 0.5 }
    }
  };

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity and performance bonuses',
      icon: Award
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and locations',
      icon: Globe
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: Heart
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning with conferences and training budgets',
      icon: Sparkles
    },
    {
      title: 'Innovation Culture',
      description: 'Work on cutting-edge technology that impacts global research',
      icon: Zap
    },
    {
      title: 'Team Collaboration',
      description: 'Join a diverse team of passionate researchers and engineers',
      icon: Users
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading career opportunities...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <motion.div
        className="pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800"
          variants={itemVariants}
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Briefcase className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join Our Team
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Help us revolutionize research collaboration and make a global impact.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-16 bg-gray-50 dark:bg-gray-800"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Work at IntelliThesis?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join a team that&apos;s passionate about advancing research and making knowledge accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Job Listings */}
        <motion.section 
          className="py-16 bg-white dark:bg-gray-900"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Open Positions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore our current openings and find the perfect role for your skills and passion.
              </p>
            </div>

            {/* Filters */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Job Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">All Types</option>
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={showRemoteOnly}
                      onChange={(e) => setShowRemoteOnly(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Remote Only</span>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Job Cards */}
            <div className="space-y-6">
              {filteredJobs.length === 0 ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No jobs found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your filters or check back later for new opportunities.
                  </p>
                </motion.div>
              ) : (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                              {job.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                              <span className="flex items-center">
                                <Building2 className="w-4 h-4 mr-1" />
                                {job.department}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                              </span>
                              {job.isRemote && (
                                <span className="flex items-center text-green-600 dark:text-green-400">
                                  <Globe className="w-4 h-4 mr-1" />
                                  Remote
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                              ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {job.experience} experience
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {job.description}
                        </p>
                      </div>
                      <div className="lg:ml-6">
                        <motion.button
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 bg-gradient-to-r from-blue-600 to-purple-600"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
} 