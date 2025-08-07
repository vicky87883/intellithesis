'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search,
  Filter,
  ArrowRight,
  Heart,
  Eye,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorId: string;
  tags: string[];
  category: string;
  featuredImage: string;
  readTime: number;
  views: number;
  likes: number;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(9);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, searchTerm, selectedCategory, selectedTag]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Fallback to default blogs if API fails
      setBlogs(defaultBlogs);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultBlogs: Blog[] = [
    {
      id: '1',
      title: 'The Future of AI in Academic Research',
      slug: 'future-ai-academic-research',
      excerpt: 'Exploring how artificial intelligence is transforming the landscape of academic research and collaboration.',
      content: 'Full content here...',
      author: 'Dr. Sarah Chen',
      authorId: '1',
      tags: ['AI', 'Research', 'Technology', 'Academic'],
      category: 'Technology',
      featuredImage: '/api/placeholder/600/400',
      readTime: 8,
      views: 1250,
      likes: 89,
      isPublished: true,
      publishedAt: '2024-01-15T10:00:00Z',
      createdAt: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      title: 'Building Effective Research Teams in the Digital Age',
      slug: 'building-effective-research-teams',
      excerpt: 'Strategies for creating and managing successful research teams in an increasingly digital and global environment.',
      content: 'Full content here...',
      author: 'Prof. Michael Rodriguez',
      authorId: '2',
      tags: ['Collaboration', 'Team Management', 'Digital Tools'],
      category: 'Management',
      featuredImage: '/api/placeholder/600/400',
      readTime: 12,
      views: 890,
      likes: 67,
      isPublished: true,
      publishedAt: '2024-01-10T14:30:00Z',
      createdAt: '2024-01-10T14:30:00Z'
    },
    {
      id: '3',
      title: 'Open Source Research: Benefits and Challenges',
      slug: 'open-source-research-benefits-challenges',
      excerpt: 'A comprehensive look at the open source movement in academic research and its implications for the future.',
      content: 'Full content here...',
      author: 'Dr. Emily Watson',
      authorId: '3',
      tags: ['Open Source', 'Academic', 'Collaboration', 'Innovation'],
      category: 'Academic',
      featuredImage: '/api/placeholder/600/400',
      readTime: 10,
      views: 1100,
      likes: 92,
      isPublished: true,
      publishedAt: '2024-01-05T09:15:00Z',
      createdAt: '2024-01-05T09:15:00Z'
    },
    {
      id: '4',
      title: 'Data Visualization Techniques for Research Papers',
      slug: 'data-visualization-research-papers',
      excerpt: 'Best practices for creating compelling and informative data visualizations in academic research.',
      content: 'Full content here...',
      author: 'Dr. James Thompson',
      authorId: '4',
      tags: ['Data Visualization', 'Research', 'Academic Writing'],
      category: 'Research',
      featuredImage: '/api/placeholder/600/400',
      readTime: 6,
      views: 750,
      likes: 45,
      isPublished: true,
      publishedAt: '2024-01-01T16:45:00Z',
      createdAt: '2024-01-01T16:45:00Z'
    },
    {
      id: '5',
      title: 'The Impact of Machine Learning on Scientific Discovery',
      slug: 'machine-learning-scientific-discovery',
      excerpt: 'How machine learning algorithms are accelerating scientific breakthroughs across various disciplines.',
      content: 'Full content here...',
      author: 'Dr. Lisa Park',
      authorId: '5',
      tags: ['Machine Learning', 'Scientific Discovery', 'AI', 'Research'],
      category: 'Technology',
      featuredImage: '/api/placeholder/600/400',
      readTime: 15,
      views: 2100,
      likes: 156,
      isPublished: true,
      publishedAt: '2023-12-28T11:20:00Z',
      createdAt: '2023-12-28T11:20:00Z'
    },
    {
      id: '6',
      title: 'Collaborative Research Across Borders',
      slug: 'collaborative-research-across-borders',
      excerpt: 'Exploring the challenges and opportunities of international research collaboration in the modern era.',
      content: 'Full content here...',
      author: 'Prof. David Kim',
      authorId: '6',
      tags: ['International Collaboration', 'Research', 'Global', 'Academic'],
      category: 'Academic',
      featuredImage: '/api/placeholder/600/400',
      readTime: 9,
      views: 680,
      likes: 38,
      isPublished: true,
      publishedAt: '2023-12-25T13:10:00Z',
      createdAt: '2023-12-25T13:10:00Z'
    }
  ];

  const filterBlogs = () => {
    let filtered = blogs.filter(blog => blog.isPublished);

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    if (selectedTag) {
      filtered = filtered.filter(blog => 
        blog.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
      );
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  };

  const categories = [...new Set(blogs.map(blog => blog.category))];
  const allTags = blogs.flatMap(blog => blog.tags);
  const uniqueTags = [...new Set(allTags)];

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading blog posts...</p>
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
                <BookOpen className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Research Insights
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover the latest trends, insights, and innovations in research and academic collaboration.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Filters */}
        <motion.section 
          className="py-8 bg-gray-50 dark:bg-gray-800"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tag
                  </label>
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">All Tags</option>
                    {uniqueTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredBlogs.length} articles found
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Blog Grid */}
        <motion.section 
          className="py-16 bg-white dark:bg-gray-900"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentBlogs.length === 0 ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search criteria or check back later for new content.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-2 text-white text-sm">
                          <span className="bg-blue-600 px-2 py-1 rounded-full text-xs">
                            {blog.category}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {blog.readTime} min read
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                        <span>•</span>
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(blog.publishedAt)}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {blog.views}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {blog.likes}
                          </span>
                        </div>

                        <motion.button
                          className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                          whileHover={{ x: 2 }}
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center space-x-2 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Next
                </button>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Newsletter CTA */}
        <motion.section 
          className="py-16 bg-gradient-to-r from-blue-600 to-purple-600"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Research Insights
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest research trends, insights, and innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <motion.button
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
} 