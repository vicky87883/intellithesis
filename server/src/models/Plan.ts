import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface PlanAttributes {
  id?: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  isPopular: boolean;
  isActive: boolean;
  maxUsers: number;
  maxProjects: number;
  maxStorage: number; // in GB
  createdAt?: Date;
  updatedAt?: Date;
}

class Plan extends Model<PlanAttributes> implements PlanAttributes {
  public id?: string;
  public name!: string;
  public description!: string;
  public price!: number;
  public currency!: string;
  public billingCycle!: 'monthly' | 'yearly';
  public features!: string[];
  public isPopular!: boolean;
  public isActive!: boolean;
  public maxUsers!: number;
  public maxProjects!: number;
  public maxStorage!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Plan.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: 'USD',
    },
    billingCycle: {
      type: DataTypes.ENUM('monthly', 'yearly'),
      defaultValue: 'monthly',
    },
    features: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    isPopular: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    maxUsers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxProjects: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxStorage: {
      type: DataTypes.INTEGER, // GB
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'plans',
    timestamps: true,
  }
);

export default Plan; 