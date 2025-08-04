import express from 'express';
import Plan from '../models/Plan';

const router = express.Router();

// Get all active plans
router.get('/', async (req, res) => {
  try {
    const plans = await Plan.findAll({
      where: { isActive: true },
      order: [['price', 'ASC']],
      attributes: [
        'id', 'name', 'description', 'price', 'currency', 
        'billingCycle', 'features', 'isPopular', 'maxUsers', 
        'maxProjects', 'maxStorage'
      ]
    });

    return res.json({
      plans,
      total: plans.length
    });
  } catch (error) {
    console.error('Get plans error:', error);
    return res.status(500).json({
      message: 'Failed to fetch pricing plans'
    });
  }
});

// Get plan by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(404).json({
        message: 'Plan not found'
      });
    }

    return res.json({ plan });
  } catch (error) {
    console.error('Get plan error:', error);
    return res.status(500).json({
      message: 'Failed to fetch plan details'
    });
  }
});

// Create new plan (admin only)
router.post('/admin', async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      currency = 'USD',
      billingCycle = 'monthly',
      features,
      isPopular = false,
      maxUsers,
      maxProjects,
      maxStorage
    } = req.body;

    // Validation
    if (!name || !description || !price || !features || !maxUsers || !maxProjects || !maxStorage) {
      return res.status(400).json({
        message: 'All required fields must be provided'
      });
    }

    if (!Array.isArray(features)) {
      return res.status(400).json({
        message: 'Features must be an array'
      });
    }

    const plan = await Plan.create({
      name,
      description,
      price,
      currency,
      billingCycle,
      features,
      isPopular,
      maxUsers,
      maxProjects,
      maxStorage,
      isActive: true
    });

    return res.status(201).json({
      message: 'Plan created successfully',
      plan
    });
  } catch (error) {
    console.error('Create plan error:', error);
    return res.status(500).json({
      message: 'Failed to create plan'
    });
  }
});

// Update plan (admin only)
router.put('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(404).json({
        message: 'Plan not found'
      });
    }

    await plan.update(updateData);
    
    return res.json({
      message: 'Plan updated successfully',
      plan
    });
  } catch (error) {
    console.error('Update plan error:', error);
    return res.status(500).json({
      message: 'Failed to update plan'
    });
  }
});

// Delete plan (admin only)
router.delete('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(404).json({
        message: 'Plan not found'
      });
    }

    await plan.destroy();
    
    return res.json({
      message: 'Plan deleted successfully'
    });
  } catch (error) {
    console.error('Delete plan error:', error);
    return res.status(500).json({
      message: 'Failed to delete plan'
    });
  }
});

export default router; 