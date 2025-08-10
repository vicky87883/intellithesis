'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  UsersIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon
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
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';
import { getAllStreams } from '@/types/streams';

export default function StreamsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStreams, setFilteredStreams] = useState(getAllStreams());
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const streams = getAllStreams();

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'computer-science', name: 'Computer Science', icon: Code2 },
    { id: 'physics', name: 'Physics', icon: Atom },
    { id: 'chemistry', name: 'Chemistry', icon: TestTube },
    { id: 'biology', name: 'Biology', icon: Brain },
    { id: 'mathematics', name: 'Mathematics', icon: BarChart3 },
    { id: 'engineering', name: 'Engineering', icon: Target },
    { id: 'medicine', name: 'Medicine', icon: Award },
  ];

  // Sort options
  const sortOptions = [
    { id: 'popular', name: 'Most Popular', icon: TrendingUp },
    { id: 'recent', name: 'Most Recent', icon: Clock },
    { id: 'papers', name: 'Most Papers', icon: DocumentTextIcon },
    { id: 'researchers', name: 'Most Researchers', icon: Users },
  ];

  // Filter and search streams
  useEffect(() => {
    let filtered = streams;

    // Apply search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(stream =>
        stream.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(stream => stream.slug.includes(selectedCategory));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.stats.researchers - a.stats.researchers;
        case 'recent':
          // Since we don't have updatedAt, we'll sort by papers count as a proxy
          return b.stats.papers - a.stats.papers;
        case 'papers':
          return b.stats.papers - a.stats.papers;
        case 'researchers':
          return b.stats.researchers - a.stats.researchers;
        default:
          return 0;
      }
    });

    setFilteredStreams(filtered);
  }, [searchQuery, selectedCategory, sortBy, streams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Research Streams
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore trending research areas across all academic disciplines and discover new opportunities for collaboration
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
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
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                <span>Sort</span>
                {showFilters ? (
                  <ChevronUpIcon className="w-4 h-4" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4" />
                )}
              </motion.button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sortOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSortBy(option.id);
                            setShowFilters(false);
                          }}
                          className="flex items-center w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <IconComponent className="h-4 w-4 mr-3" />
                          {option.name}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Showing {filteredStreams.length} of {streams.length} research streams
          </p>
        </motion.div>

        {/* Streams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStreams.map((stream, index) => {
            const IconComponent = getIconComponent(stream.icon);
            return (
              <motion.div
                key={stream.slug}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {stream.stats.researchers.toLocaleString()}+
                    </span>
                    <span className="flex items-center">
                      <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                      {stream.stats.institutions}+
                    </span>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      4.5
                    </span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={`/streams/${stream.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Explore Stream
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredStreams.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No streams found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <motion.button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
