import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface BlogAttributes {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorId: string;
  tags: string[];
  category: string;
  featuredImage: string;
  readTime: number; // in minutes
  views: number;
  likes: number;
  isPublished: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

class Blog extends Model<BlogAttributes> implements BlogAttributes {
  public id?: string;
  public title!: string;
  public slug!: string;
  public excerpt!: string;
  public content!: string;
  public author!: string;
  public authorId!: string;
  public tags!: string[];
  public category!: string;
  public featuredImage!: string;
  public readTime!: number;
  public views!: number;
  public likes!: number;
  public isPublished!: boolean;
  public publishedAt?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Blog.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    featuredImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    readTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'blogs',
    timestamps: true,
  }
);

export default Blog; 