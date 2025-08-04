import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

interface DocumentAttributes {
  id: string;
  userId: string;
  title: string;
  description?: string;
  fileName: string;
  originalName: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  status: 'processing' | 'completed' | 'failed';
  analysisResult?: object;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface DocumentCreationAttributes extends Omit<DocumentAttributes, 'id' | 'createdAt' | 'updatedAt'> {
  id?: string;
}

class Document extends Model<DocumentAttributes, DocumentCreationAttributes> implements DocumentAttributes {
  public id!: string;
  public userId!: string;
  public title!: string;
  public description?: string;
  public fileName!: string;
  public originalName!: string;
  public filePath!: string;
  public fileSize!: number;
  public mimeType!: string;
  public status!: 'processing' | 'completed' | 'failed';
  public analysisResult?: object;
  public tags?: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Document.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fileName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    originalName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    filePath: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    fileSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    mimeType: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('processing', 'completed', 'failed'),
      defaultValue: 'processing',
    },
    analysisResult: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'documents',
    timestamps: true,
  }
);

// Define associations
Document.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Document, { foreignKey: 'userId', as: 'documents' });

export default Document; 