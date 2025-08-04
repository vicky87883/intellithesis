import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface JobAttributes {
  id?: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  isActive: boolean;
  isRemote: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

class Job extends Model<JobAttributes> implements JobAttributes {
  public id?: string;
  public title!: string;
  public department!: string;
  public location!: string;
  public type!: 'full-time' | 'part-time' | 'contract' | 'internship';
  public experience!: string;
  public description!: string;
  public requirements!: string[];
  public responsibilities!: string[];
  public benefits!: string[];
  public salary!: {
    min: number;
    max: number;
    currency: string;
  };
  public isActive!: boolean;
  public isRemote!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Job.init(
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
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('full-time', 'part-time', 'contract', 'internship'),
      allowNull: false,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    requirements: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    responsibilities: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    benefits: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    salary: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isRemote: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'jobs',
    timestamps: true,
  }
);

export default Job; 