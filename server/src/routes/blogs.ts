import express from 'express';
import Blog from '../models/Blog';
import sequelize from '../config/database';

const router = express.Router();

// Get all published blogs
router.get('/', async (req, res) => {
  try {
    const { category, tag, author, page = 1, limit = 10 } = req.query;
    
    const whereClause: any = { isPublished: true };
    
    if (category) {
      whereClause.category = category;
    }
    
    if (author) {
      whereClause.author = author;
    }

    const offset = (Number(page) - 1) * Number(limit);

    const blogs = await Blog.findAll({
      where: whereClause,
      order: [['publishedAt', 'DESC']],
      limit: Number(limit),
      offset,
      attributes: [
        'id', 'title', 'slug', 'excerpt', 'author', 'category', 
        'tags', 'featuredImage', 'readTime', 'views', 'likes', 
        'publishedAt', 'createdAt'
      ]
    });

    const total = await Blog.count({ where: whereClause });

    // Filter by tag if provided
    let filteredBlogs = blogs;
    if (tag) {
      filteredBlogs = blogs.filter(blog => 
        blog.tags.some((t: string) => t.toLowerCase().includes(tag.toString().toLowerCase()))
      );
    }

    res.json({
      blogs: filteredBlogs,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit))
    });
  } catch (error) {
    console.error('Get blogs error:', error);
    res.status(500).json({
      message: 'Failed to fetch blog posts'
    });
  }
});

// Get blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const blog = await Blog.findOne({
      where: { slug, isPublished: true }
    });
    
    if (!blog) {
      return res.status(404).json({
        message: 'Blog post not found'
      });
    }

    // Increment views
    await blog.increment('views');

    return res.json({ blog });
  } catch (error) {
    console.error('Get blog error:', error);
    return res.status(500).json({
      message: 'Failed to fetch blog post'
    });
  }
});

// Get blog categories
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Blog.findAll({
      where: { isPublished: true },
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('category')), 'category']],
      raw: true
    });

    res.json({
      categories: categories.map(c => c.category)
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      message: 'Failed to fetch categories'
    });
  }
});

// Get blog tags
router.get('/tags/list', async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      where: { isPublished: true },
      attributes: ['tags']
    });

    const allTags = blogs.flatMap(blog => blog.tags);
    const uniqueTags = [...new Set(allTags)];

    res.json({
      tags: uniqueTags
    });
  } catch (error) {
    console.error('Get tags error:', error);
    res.status(500).json({
      message: 'Failed to fetch tags'
    });
  }
});

// Create new blog (admin only)
router.post('/admin', async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      author,
      authorId,
      tags,
      category,
      featuredImage,
      readTime,
      isPublished = false
    } = req.body;

    // Validation
    if (!title || !slug || !excerpt || !content || !author || 
        !authorId || !tags || !category || !featuredImage || !readTime) {
      return res.status(400).json({
        message: 'All required fields must be provided'
      });
    }

    if (!Array.isArray(tags)) {
      return res.status(400).json({
        message: 'Tags must be an array'
      });
    }

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ where: { slug } });
    if (existingBlog) {
      return res.status(400).json({
        message: 'Blog post with this slug already exists'
      });
    }

    const blogData: any = {
      title,
      slug,
      excerpt,
      content,
      author,
      authorId,
      tags,
      category,
      featuredImage,
      readTime,
      isPublished
    };

    if (isPublished) {
      blogData.publishedAt = new Date();
    }

    const blog = await Blog.create(blogData);

    return res.status(201).json({
      message: 'Blog post created successfully',
      blog
    });
  } catch (error) {
    console.error('Create blog error:', error);
    return res.status(500).json({
      message: 'Failed to create blog post'
    });
  }
});

// Update blog (admin only)
router.put('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({
        message: 'Blog post not found'
      });
    }

    // If publishing for the first time, set publishedAt
    if (updateData.isPublished && !blog.isPublished) {
      updateData.publishedAt = new Date();
    }

    await blog.update(updateData);
    
    return res.json({
      message: 'Blog post updated successfully',
      blog
    });
  } catch (error) {
    console.error('Update blog error:', error);
    return res.status(500).json({
      message: 'Failed to update blog post'
    });
  }
});

// Delete blog (admin only)
router.delete('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({
        message: 'Blog post not found'
      });
    }

    await blog.destroy();
    
    return res.json({
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    console.error('Delete blog error:', error);
    return res.status(500).json({
      message: 'Failed to delete blog post'
    });
  }
});

// Like blog post
router.post('/:id/like', async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({
        message: 'Blog post not found'
      });
    }

    await blog.increment('likes');
    
    return res.json({
      message: 'Blog post liked successfully',
      likes: blog.likes + 1
    });
  } catch (error) {
    console.error('Like blog error:', error);
    return res.status(500).json({
      message: 'Failed to like blog post'
    });
  }
});

export default router; 