import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { auth } from '../middleware/auth';
import Document from '../models/Document';

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../uploads');
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
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760') // 10MB default
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, DOCX, TXT, JPG, JPEG, and PNG files are allowed.'));
    }
  }
});

// Upload document
router.post('/upload', auth, upload.single('file'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { title, description, tags } = req.body;
    const user = (req as any).user;

    const document = await Document.create({
      userId: user.id,
      title: title || req.file.originalname,
      description: description || '',
      fileName: req.file.filename,
      originalName: req.file.originalname,
      filePath: req.file.path,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
      tags: tags ? JSON.parse(tags) : [],
      status: 'processing'
    });

    // TODO: Trigger AI analysis here
    // For now, we'll simulate processing
    setTimeout(async () => {
      await document.update({ status: 'completed' });
    }, 5000);

    return res.status(201).json({
      message: 'Document uploaded successfully',
      document: {
        id: document.id,
        title: document.title,
        fileName: document.fileName,
        fileSize: document.fileSize,
        status: document.status,
        createdAt: document.createdAt
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    if (error instanceof Error && error.message.includes('Invalid file type')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Server error' });
  }
});

// Get all documents for user
router.get('/', auth, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { page = 1, limit = 10, status, search } = req.query;

    const whereClause: any = { userId: user.id };
    if (status) whereClause.status = status;
    if (search) {
      whereClause.title = { [require('sequelize').Op.iLike]: `%${search}%` };
    }

    const documents = await Document.findAndCountAll({
      where: whereClause,
      order: [['createdAt', 'DESC']],
      limit: parseInt(limit as string),
      offset: (parseInt(page as string) - 1) * parseInt(limit as string),
      attributes: { exclude: ['filePath'] }
    });

    return res.json({
      documents: documents.rows,
      total: documents.count,
      page: parseInt(page as string),
      totalPages: Math.ceil(documents.count / parseInt(limit as string))
    });
  } catch (error) {
    console.error('Get documents error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Get document by ID
router.get('/:id', auth, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { id } = req.params;

    const document = await Document.findOne({
      where: { id, userId: user.id },
      attributes: { exclude: ['filePath'] }
    });

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    return res.json({ document });
  } catch (error) {
    console.error('Get document error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Update document
router.put('/:id', auth, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { id } = req.params;
    const { title, description, tags } = req.body;

    const document = await Document.findOne({
      where: { id, userId: user.id }
    });

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    await document.update({
      title: title || document.title,
      description: description !== undefined ? description : document.description,
      tags: tags ? JSON.parse(tags) : document.tags
    });

    return res.json({
      message: 'Document updated successfully',
      document: {
        id: document.id,
        title: document.title,
        description: document.description,
        tags: document.tags,
        status: document.status
      }
    });
  } catch (error) {
    console.error('Update document error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Delete document
router.delete('/:id', auth, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { id } = req.params;

    const document = await Document.findOne({
      where: { id, userId: user.id }
    });

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Delete file from filesystem
    if (fs.existsSync(document.filePath)) {
      fs.unlinkSync(document.filePath);
    }

    await document.destroy();

    return res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Delete document error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Analyze document
router.post('/:id/analyze', auth, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { id } = req.params;

    const document = await Document.findOne({
      where: { id, userId: user.id }
    });

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // TODO: Implement AI analysis here
    // For now, we'll simulate analysis
    const analysisResult = {
      summary: 'This is a simulated analysis result.',
      keyThemes: ['theme1', 'theme2', 'theme3'],
      citations: ['citation1', 'citation2'],
      suggestions: ['suggestion1', 'suggestion2'],
      analysisDate: new Date()
    };

    await document.update({
      analysisResult,
      status: 'completed'
    });

    return res.json({
      message: 'Document analysis completed',
      analysis: analysisResult
    });
  } catch (error) {
    console.error('Analyze document error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router; 