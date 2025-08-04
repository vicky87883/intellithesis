import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface ContactAttributes {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'replied';
  createdAt?: Date;
  updatedAt?: Date;
}

class Contact extends Model<ContactAttributes> implements ContactAttributes {
  public id?: string;
  public name!: string;
  public email!: string;
  public subject!: string;
  public message!: string;
  public status!: 'pending' | 'read' | 'replied';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Contact.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'read', 'replied'),
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    tableName: 'contacts',
    timestamps: true,
  }
);

export default Contact; 