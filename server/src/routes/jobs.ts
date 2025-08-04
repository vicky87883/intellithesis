import express from 'express';
import Job from '../models/Job';
import sequelize from '../config/database';

const router = express.Router();

// Get all active jobs
router.get('/', async (req, res) => {
  try {
    const { department, type, location, remote } = req.query;
    
    const whereClause: any = { isActive: true };
    
    if (department) {
      whereClause.department = department;
    }
    
    if (type) {
      whereClause.type = type;
    }
    
    if (location) {
      whereClause.location = location;
    }
    
    if (remote !== undefined) {
      whereClause.isRemote = remote === 'true';
    }

    const jobs = await Job.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']],
      attributes: [
        'id', 'title', 'department', 'location', 'type', 
        'experience', 'isRemote', 'salary', 'createdAt'
      ]
    });

    res.json({
      jobs,
      total: jobs.length
    });
  } catch (error) {
    console.error('Get jobs error:', error);
    res.status(500).json({
      message: 'Failed to fetch job opportunities'
    });
  }
});

// Get job by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({
        message: 'Job not found'
      });
    }

    return res.json({ job });
  } catch (error) {
    console.error('Get job error:', error);
    return res.status(500).json({
      message: 'Failed to fetch job details'
    });
  }
});

// Get job departments
router.get('/departments/list', async (req, res) => {
  try {
    const departments = await Job.findAll({
      where: { isActive: true },
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('department')), 'department']],
      raw: true
    });

    res.json({
      departments: departments.map(d => d.department)
    });
  } catch (error) {
    console.error('Get departments error:', error);
    res.status(500).json({
      message: 'Failed to fetch departments'
    });
  }
});

// Get job locations
router.get('/locations/list', async (req, res) => {
  try {
    const locations = await Job.findAll({
      where: { isActive: true },
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('location')), 'location']],
      raw: true
    });

    res.json({
      locations: locations.map(l => l.location)
    });
  } catch (error) {
    console.error('Get locations error:', error);
    res.status(500).json({
      message: 'Failed to fetch locations'
    });
  }
});

// Create new job (admin only)
router.post('/admin', async (req, res) => {
  try {
    const {
      title,
      department,
      location,
      type,
      experience,
      description,
      requirements,
      responsibilities,
      benefits,
      salary,
      isRemote = false
    } = req.body;

    // Validation
    if (!title || !department || !location || !type || !experience || 
        !description || !requirements || !responsibilities || !benefits || !salary) {
      return res.status(400).json({
        message: 'All required fields must be provided'
      });
    }

    if (!Array.isArray(requirements) || !Array.isArray(responsibilities) || !Array.isArray(benefits)) {
      return res.status(400).json({
        message: 'Requirements, responsibilities, and benefits must be arrays'
      });
    }

    const job = await Job.create({
      title,
      department,
      location,
      type,
      experience,
      description,
      requirements,
      responsibilities,
      benefits,
      salary,
      isRemote,
      isActive: true
    });

    return res.status(201).json({
      message: 'Job created successfully',
      job
    });
  } catch (error) {
    console.error('Create job error:', error);
    return res.status(500).json({
      message: 'Failed to create job'
    });
  }
});

// Update job (admin only)
router.put('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({
        message: 'Job not found'
      });
    }

    await job.update(updateData);
    
    return res.json({
      message: 'Job updated successfully',
      job
    });
  } catch (error) {
    console.error('Update job error:', error);
    return res.status(500).json({
      message: 'Failed to update job'
    });
  }
});

// Delete job (admin only)
router.delete('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({
        message: 'Job not found'
      });
    }

    await job.destroy();
    
    return res.json({
      message: 'Job deleted successfully'
    });
  } catch (error) {
    console.error('Delete job error:', error);
    return res.status(500).json({
      message: 'Failed to delete job'
    });
  }
});

export default router; 