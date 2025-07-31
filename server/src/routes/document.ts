import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { body, validationResult } from 'express-validator';
import { auth } from '../middleware/auth';
import Document from '../models/Document';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = process.env.UPLOAD_PATH || './uploads';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '52428800') // 50MB default
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed.'));
    }
  }
});

// Upload document
router.post('/upload', auth, upload.single('document'), [
  body('title').trim().isLength({ min: 1, max: 200 }),
  body('description').optional().trim().isLength({ max: 1000 }),
  body('category').optional().isIn(['thesis', 'research_paper', 'literature_review', 'methodology', 'other']),
  body('tags').optional().isArray(),
  body('isPublic').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { title, description, category, tags, isPublic } = req.body;

    const document = new Document({
      title,
      description,
      fileName: req.file.filename,
      originalName: req.file.originalname,
      fileSize: req.file.size,
      fileType: req.file.mimetype,
      filePath: req.file.path,
      userId: req.user!._id,
      category: category || 'other',
      tags: tags || [],
      isPublic: isPublic || false
    });

    await document.save();

    res.status(201).json({
      message: 'Document uploaded successfully',
      document: {
        id: document._id,
        title: document.title,
        description: document.description,
        fileName: document.fileName,
        originalName: document.originalName,
        fileSize: document.fileSize,
        status: document.status,
        category: document.category,
        tags: document.tags,
        isPublic: document.isPublic,
        createdAt: document.createdAt
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Server error during upload' });
  }
});

// Get user's documents
router.get('/my-documents', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10, category, status } = req.query;
    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const filter: any = { userId: req.user!._id };
    if (category) filter.category = category;
    if (status) filter.status = status;

    const documents = await Document.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit as string));

    const total = await Document.countDocuments(filter);

    res.json({
      documents,
      pagination: {
        currentPage: parseInt(page as string),
        totalPages: Math.ceil(total / parseInt(limit as string)),
        totalDocuments: total,
        hasNext: skip + documents.length < total,
        hasPrev: parseInt(page as string) > 1
      }
    });
  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single document
router.get('/:id', auth, async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      userId: req.user!._id
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    res.json({ document });
  } catch (error) {
    console.error('Get document error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update document
router.put('/:id', auth, [
  body('title').optional().trim().isLength({ min: 1, max: 200 }),
  body('description').optional().trim().isLength({ max: 1000 }),
  body('category').optional().isIn(['thesis', 'research_paper', 'literature_review', 'methodology', 'other']),
  body('tags').optional().isArray(),
  body('isPublic').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, category, tags, isPublic } = req.body;

    const document = await Document.findOne({
      _id: req.params.id,
      userId: req.user!._id
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Update fields
    if (title) document.title = title;
    if (description !== undefined) document.description = description;
    if (category) document.category = category;
    if (tags) document.tags = tags;
    if (isPublic !== undefined) document.isPublic = isPublic;

    await document.save();

    res.json({
      message: 'Document updated successfully',
      document
    });
  } catch (error) {
    console.error('Update document error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete document
router.delete('/:id', auth, async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      userId: req.user!._id
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Delete file from filesystem
    if (fs.existsSync(document.filePath)) {
      fs.unlinkSync(document.filePath);
    }

    await Document.findByIdAndDelete(req.params.id);

    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Delete document error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Download document
router.get('/:id/download', auth, async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      userId: req.user!._id
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    if (!fs.existsSync(document.filePath)) {
      return res.status(404).json({ error: 'File not found on server' });
    }

    res.download(document.filePath, document.originalName);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router; 