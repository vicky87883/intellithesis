import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { body, validationResult } from 'express-validator';
import Onboarding from '../models/Onboarding';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['pdf', 'jpg', 'jpeg', 'png', 'txt', 'doc', 'docx'];
    const fileExtension = path.extname(file.originalname).toLowerCase().substring(1);
    
    if (allowedTypes.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(new Error(`Invalid file type. Allowed types: ${allowedTypes.join(', ')}`));
    }
  }
});

// Validation middleware
const validateOnboarding = [
  body('fullName').trim().isLength({ min: 2, max: 255 }).withMessage('Full name must be between 2 and 255 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email address'),
  body('university').trim().isLength({ min: 2, max: 255 }).withMessage('University must be between 2 and 255 characters'),
  body('degreeType').isIn(['Bachelor\'s', 'Master\'s', 'PhD']).withMessage('Please select a valid degree type'),
  body('major').trim().isLength({ min: 2, max: 255 }).withMessage('Major must be between 2 and 255 characters'),
  body('enrollmentYear').matches(/^\d{4}$/).withMessage('Enrollment year must be a 4-digit year'),
  body('graduationYear').matches(/^\d{4}$/).withMessage('Graduation year must be a 4-digit year'),
  body('thesisTitle').optional().trim().isLength({ max: 500 }).withMessage('Thesis title must be less than 500 characters'),
  body('supervisorName').optional().trim().isLength({ max: 255 }).withMessage('Supervisor name must be less than 255 characters'),
  body('thesisStage').optional().trim().isLength({ max: 100 }).withMessage('Thesis stage must be less than 100 characters'),
  body('researchInterests').optional().trim().isLength({ max: 1000 }).withMessage('Research interests must be less than 1000 characters'),
  body('familiarTools').optional().trim().isLength({ max: 1000 }).withMessage('Familiar tools must be less than 1000 characters'),
  body('helpNeeded').optional().trim().isLength({ max: 1000 }).withMessage('Help needed must be less than 1000 characters'),
  body('publishPlans').isBoolean().withMessage('Publish plans must be a boolean value'),
  body('hasDocuments').isBoolean().withMessage('Has documents must be a boolean value')
];

// Create onboarding record
router.post('/onboarding', upload.array('documents', 5), validateOnboarding, async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
      return;
    }

    const documentPaths: string[] = [];
    const files = req.files as Express.Multer.File[];
    if (files && files.length > 0) {
      files.forEach((file: Express.Multer.File) => {
        documentPaths.push(file.path);
      });
    }

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
      publishPlans: req.body.publishPlans === 'true',
      hasDocuments: req.body.hasDocuments === 'true',
      documentPaths: documentPaths.length > 0 ? JSON.stringify(documentPaths) : null,
      onboardingCompleted: true
    };

    const existingOnboarding = await Onboarding.findOne({
      where: { email: onboardingData.email }
    });

    if (existingOnboarding) {
      res.status(400).json({
        success: false,
        message: 'An onboarding record with this email already exists'
      });
      return;
    }

    const onboarding = await Onboarding.create(onboardingData);

    res.status(201).json({
      success: true,
      message: 'Onboarding completed successfully!',
      data: {
        id: (onboarding as any).id,
        fullName: (onboarding as any).fullName,
        email: (onboarding as any).email,
        university: (onboarding as any).university,
        degreeType: (onboarding as any).degreeType,
        major: (onboarding as any).major,
        enrollmentYear: (onboarding as any).enrollmentYear,
        graduationYear: (onboarding as any).graduationYear,
        thesisTitle: (onboarding as any).thesisTitle,
        supervisorName: (onboarding as any).supervisorName,
        thesisStage: (onboarding as any).thesisStage,
        researchInterests: (onboarding as any).researchInterests,
        familiarTools: (onboarding as any).familiarTools,
        helpNeeded: (onboarding as any).helpNeeded,
        publishPlans: (onboarding as any).publishPlans,
        hasDocuments: (onboarding as any).hasDocuments,
        documentPaths: (onboarding as any).documentPaths,
        onboardingCompleted: (onboarding as any).onboardingCompleted,
        createdAt: (onboarding as any).createdAt,
        updatedAt: (onboarding as any).updatedAt
      }
    });

  } catch (error) {
    console.error('Onboarding creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get onboarding data by email
router.get('/onboarding/:email', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.params;

    const onboarding = await Onboarding.findOne({
      where: { email: email }
    });

    if (!onboarding) {
      res.status(404).json({
        success: false,
        message: 'Onboarding data not found'
      });
      return;
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
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get all onboarding records (admin only)
router.get('/onboarding', async (req: Request, res: Response): Promise<void> => {
  try {
    const onboardings = await Onboarding.findAll({
      order: [['created_at', 'DESC']]
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
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;

