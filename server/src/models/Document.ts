import mongoose, { Document, Schema } from 'mongoose';

export interface IDocument extends Document {
  title: string;
  description?: string;
  fileName: string;
  originalName: string;
  fileSize: number;
  fileType: string;
  filePath: string;
  userId: mongoose.Types.ObjectId;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  aiInsights?: {
    summary?: string;
    keyThemes?: string[];
    citations?: string[];
    suggestions?: string[];
    analysisDate?: Date;
  };
  tags?: string[];
  category: 'thesis' | 'research_paper' | 'literature_review' | 'methodology' | 'other';
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const documentSchema = new Schema<IDocument>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  fileName: {
    type: String,
    required: true
  },
  originalName: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['uploading', 'processing', 'completed', 'error'],
    default: 'uploading'
  },
  aiInsights: {
    summary: String,
    keyThemes: [String],
    citations: [String],
    suggestions: [String],
    analysisDate: {
      type: Date,
      default: null
    }
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tag cannot exceed 50 characters']
  }],
  category: {
    type: String,
    enum: ['thesis', 'research_paper', 'literature_review', 'methodology', 'other'],
    default: 'other'
  },
  isPublic: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
documentSchema.index({ userId: 1, createdAt: -1 });
documentSchema.index({ status: 1 });
documentSchema.index({ category: 1 });

export default mongoose.model<IDocument>('Document', documentSchema); 