'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  Users, 
  Globe, 
  ArrowRight,
  Search,
  Building2,
  Award,
  Rocket
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

interface Internship {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'summer' | 'fall' | 'spring' | 'year-round';
  duration: string;
  description: string;
  skills: string[];
  stipend: {
    min: number;
    max: number;
    currency: string;
  };
  isRemote: boolean;
  applicationDeadline: string;
}

export default function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    // Set default internships
    setInternships(defaultInternships);
    setFilteredInternships(defaultInternships);
  }, []);

  useEffect(() => {
    filterInternships();
  }, [internships, searchTerm, selectedDepartment]);

  const defaultInternships: Internship[] = [
    {
      id: '1',
      title: 'AI/ML Engineering Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'summer',
      duration: '12 weeks',
      description: 'Gain hands-on experience with cutting-edge AI and machine learning technologies.',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis'],
      stipend: { min: 4000, max: 6000, currency: 'USD' },
      isRemote: true,
      applicationDeadline: '2024-03-15'
    },
    {
      id: '2',
      title: 'Frontend Development Intern',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'summer',
      duration: '12 weeks',
      description: 'Build beautiful and responsive user interfaces for our research platform.',
      skills: ['React', 'JavaScript', 'CSS', 'TypeScript', 'UI/UX Design'],
      stipend: { min: 3500, max: 5500, currency: 'USD' },
      isRemote: false,
      applicationDeadline: '2024-03-10'
    },
    {
      id: '3',
      title: 'Research Data Analyst Intern',
      department: 'Research & Development',
      location: 'Remote',
      type: 'fall',
      duration: '16 weeks',
      description: 'Analyze research data and contribute to our AI-powered insights platform.',
      skills: ['Python', 'R', 'Statistics', 'Data Visualization', 'SQL'],
      stipend: { min: 3800, max: 5800, currency: 'USD' },
      isRemote: true,
      applicationDeadline: '2024-04-01'
    },
    {
      id: '4',
      title: 'Natural Language Processing Intern',
      department: 'Research & Development',
      location: 'Remote',
      type: 'summer',
      duration: '12 weeks',
      description: 'Work on cutting-edge NLP technologies to enhance our research assistance capabilities.',
      skills: ['Python', 'NLP', 'Transformers', 'BERT', 'Text Processing'],
      stipend: { min: 4200, max: 6200, currency: 'USD' },
      isRemote: true,
      applicationDeadline: '2024-03-20'
    },
    {
      id: '5',
      title: 'UX/UI Design Intern',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'summer',
      duration: '12 weeks',
      description: 'Create intuitive and beautiful user experiences for our research platform.',
      skills: ['Figma', 'Sketch', 'UI/UX Design', 'Prototyping', 'User Research'],
      stipend: { min: 3500, max: 5500, currency: 'USD' },
      isRemote: false,
      applicationDeadline: '2024-03-12'
    }
  ];

  const filterInternships = () => {
    let filtered = internships;

    if (searchTerm) {
      filtered = filtered.filter(internship =>
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedDepartment) {
      filtered = filtered.filter(internship => internship.department === selectedDepartment);
    }

    setFilteredInternships(filtered);
  };

  const departments = [...new Set(internships.map(internship => internship.department))];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <motion.div
        className="pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 dark:from-green-800 dark:via-blue-800 dark:to-purple-800">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
                <GraduationCap className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Internship Opportunities
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Launch your career with hands-on experience in AI research and technology.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Internship Listings */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Available Internships
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore our internship opportunities and find the perfect role to kickstart your career.
              </p>
            </div>

            {/* Filters */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search internships..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Internship Cards */}
            <div className="space-y-6">
              {filteredInternships.map((internship, index) => (
                <motion.article
                  key={internship.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {internship.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <span className="flex items-center">
                              <Building2 className="w-4 h-4 mr-1" />
                              {internship.department}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {internship.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {internship.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">
                            ${internship.stipend.min.toLocaleString()} - ${internship.stipend.max.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {internship.type.charAt(0).toUpperCase() + internship.type.slice(1)} Internship
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {internship.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Required:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map(skill => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          {internship.isRemote && (
                            <span className="flex items-center">
                              <Globe className="w-4 h-4 mr-1" />
                              Remote
                            </span>
                          )}
                          <span className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            Competitive Stipend
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Deadline: {formatDate(internship.applicationDeadline)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <motion.button
                        className="w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
