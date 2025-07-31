import express from 'express';
import { body, validationResult } from 'express-validator';
import { auth } from '../middleware/auth';
import User from '../models/User';

const router = express.Router();

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user!._id).select('-password');
    res.json({ user });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile
router.put('/profile', auth, [
  body('firstName').optional().trim().isLength({ min: 1, max: 50 }),
  body('lastName').optional().trim().isLength({ min: 1, max: 50 }),
  body('institution').optional().trim().isLength({ max: 100 }),
  body('department').optional().trim().isLength({ max: 100 }),
  body('researchInterests').optional().isArray(),
  body('profilePicture').optional().isURL()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, institution, department, researchInterests, profilePicture } = req.body;

    const user = await User.findById(req.user!._id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (institution !== undefined) user.institution = institution;
    if (department !== undefined) user.department = department;
    if (researchInterests) user.researchInterests = researchInterests;
    if (profilePicture) user.profilePicture = profilePicture;

    await user.save();

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        institution: user.institution,
        department: user.department,
        researchInterests: user.researchInterests,
        profilePicture: user.profilePicture
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Change password
router.put('/password', auth, [
  body('currentPassword').notEmpty(),
  body('newPassword').isLength({ min: 6 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user!._id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify current password
    const isCurrentPasswordValid = await user.comparePassword(currentPassword);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete user account
router.delete('/account', auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user!._id);
    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Delete account error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user statistics
router.get('/stats', auth, async (req, res) => {
  try {
    // This would typically include document counts, analysis stats, etc.
    // For now, returning basic user info
    const user = await User.findById(req.user!._id).select('-password');
    
    res.json({
      stats: {
        documentsCount: 0, // Would be calculated from Document model
        analysisCount: 0,  // Would be calculated from analysis records
        lastActivity: user!.lastLogin,
        memberSince: user!.createdAt
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router; 