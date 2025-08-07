import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Onboarding = sequelize.define('Onboarding', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'full_name'
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  university: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  degreeType: {
    type: DataTypes.ENUM('Bachelor\'s', 'Master\'s', 'PhD'),
    allowNull: false,
    field: 'degree_type'
  },
  major: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  enrollmentYear: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'enrollment_year'
  },
  graduationYear: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'graduation_year'
  },
  thesisTitle: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'thesis_title'
  },
  supervisorName: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'supervisor_name'
  },
  thesisStage: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'thesis_stage'
  },
  researchInterests: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'research_interests'
  },
  familiarTools: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'familiar_tools'
  },
  helpNeeded: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'help_needed'
  },
  publishPlans: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'publish_plans'
  },
  hasDocuments: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'has_documents'
  },
  documentPaths: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'document_paths'
  },
  onboardingCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'onboarding_completed'
  }
}, {
  tableName: 'user_onboarding',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Onboarding;
