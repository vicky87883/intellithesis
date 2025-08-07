import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { body, validationResult } from 'express-validator';
import Onboarding from '../models/Onboarding';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/onboarding';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt', '.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, DOCX, TXT, JPG, JPEG, PNG files are allowed.'));
    }
  }
});

// Validation middleware
const validateOnboarding = [
  body('fullName').trim().isLength({ min: 2, max: 255 }).withMessage('Full name must be between 2 and 255 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Must be a valid email address'),
  body('university').trim().isLength({ min: 2, max: 255 }).withMessage('University name must be between 2 and 255 characters'),
  body('degreeType').isIn(['Bachelor\'s', 'Master\'s', 'PhD']).withMessage('Degree type must be Bachelor\'s, Master\'s, or PhD'),
  body('major').trim().isLength({ min: 2, max: 255 }).withMessage('Major must be between 2 and 255 characters'),
  body('enrollmentYear').isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('Enrollment year must be a valid year'),
  body('graduationYear').isInt({ min: 1900, max: 2100 }).withMessage('Graduation year must be a valid year'),
  body('thesisTitle').optional().trim().isLength({ max: 1000 }).withMessage('Thesis title must be less than 1000 characters'),
  body('supervisorName').optional().trim().isLength({ max: 255 }).withMessage('Supervisor name must be less than 255 characters'),
  body('thesisStage').optional().trim().isLength({ max: 100 }).withMessage('Thesis stage must be less than 100 characters'),
  body('researchInterests').optional().trim().isLength({ max: 2000 }).withMessage('Research interests must be less than 2000 characters'),
  body('familiarTools').optional().trim().isLength({ max: 1000 }).withMessage('Familiar tools must be less than 1000 characters'),
  body('helpNeeded').optional().trim().isLength({ max: 1000 }).withMessage('Help needed must be less than 1000 characters'),
  body('publishPlans').optional().isBoolean().withMessage('Publish plans must be a boolean'),
  body('hasDocuments').optional().isBoolean().withMessage('Has documents must be a boolean')
];

// Create onboarding record
router.post('/onboarding', upload.array('documents', 5), validateOnboarding, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    // Handle file uploads
    const documentPaths: string[] = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach((file: Express.Multer.File) => {
        documentPaths.push(file.path);
      });
    }

    // Create onboarding record
    const onboardingData = {
      fullName: req.body.fullName,
      email: req.body.email,
      university: req.body.university,
      degreeType: req.body.degreeType,
      major: req.body.major,
      enrollmentYear: req.body.enrollmentYear,
      graduationYear: req.body.graduationYear,
      thesisTitle: req.body.thesisTitle || null,
      supervisorName: req.body.supervisorName || null,
      thesisStage: req.body.thesisStage || null,
      researchInterests: req.body.researchInterests || null,
      familiarTools: req.body.familiarTools || null,
      helpNeeded: req.body.helpNeeded || null,
      publishPlans: req.body.publishPlans === 'true' || req.body.publishPlans === true,
      hasDocuments: req.body.hasDocuments === 'true' || req.body.hasDocuments === true,
      documentPaths: documentPaths.length > 0 ? JSON.stringify(documentPaths) : null,
      onboardingCompleted: true
    };

    // Check if email already exists
    const existingOnboarding = await Onboarding.findOne({
      where: { email: onboardingData.email }
    });

    if (existingOnboarding) {
      return res.status(400).json({
        success: false,
        message: 'An onboarding record with this email already exists'
      });
    }

    const onboarding = await Onboarding.create(onboardingData);

    res.status(201).json({
      success: true,
      message: 'Onboarding completed successfully!',
      data: {
        id: onboarding.id,
        fullName: onboarding.fullName,
        email: onboarding.email,
        university: onboarding.university,
        degreeType: onboarding.degreeType,
        major: onboarding.major,
        enrollmentYear: onboarding.enrollmentYear,
        graduationYear: onboarding.graduationYear,
        thesisTitle: onboarding.thesisTitle,
        supervisorName: onboarding.supervisorName,
        thesisStage: onboarding.thesisStage,
        researchInterests: onboarding.researchInterests,
        familiarTools: onboarding.familiarTools,
        helpNeeded: onboarding.helpNeeded,
        publishPlans: onboarding.publishPlans,
        hasDocuments: onboarding.hasDocuments,
        documentPaths: onboarding.documentPaths,
        onboardingCompleted: onboarding.onboardingCompleted,
        createdAt: onboarding.createdAt,
        updatedAt: onboarding.updatedAt
      }
    });

  } catch (error) {
    console.error('Onboarding creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Get onboarding data by email
router.get('/onboarding/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const onboarding = await Onboarding.findOne({
      where: { email: email }
    });

    if (!onboarding) {
      return res.status(404).json({
        success: false,
        message: 'Onboarding data not found'
      });
    }

    res.json({
      success: true,
      data: onboarding
    });

  } catch (error) {
    console.error('Get onboarding error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Get all onboarding records (admin only)
router.get('/onboarding', async (req, res) => {
  try {
    const onboardings = await Onboarding.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: onboardings
    });

  } catch (error) {
    console.error('Get all onboardings error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

export default router;
