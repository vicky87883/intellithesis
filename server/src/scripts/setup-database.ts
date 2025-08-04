import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from '../models/User';
import Document from '../models/Document';

dotenv.config();

const setupDatabase = async () => {
  try {
    // Create a connection without specifying database to create it if it doesn't exist
    const tempSequelize = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: 'postgres', // Connect to default postgres database
      logging: false
    });

    // Create database if it doesn't exist
    const dbName = process.env.DB_NAME || 'intellithesis';
    try {
      await tempSequelize.query(`CREATE DATABASE "${dbName}"`);
      console.log(`✅ Database "${dbName}" created successfully.`);
    } catch (error: any) {
      if (error.message.includes('already exists')) {
        console.log(`✅ Database "${dbName}" already exists.`);
      } else {
        console.error('❌ Error creating database:', error);
        return false;
      }
    }

    await tempSequelize.close();

    // Now connect to the actual database
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: dbName,
      logging: false
    });

    // Test connection
    await sequelize.authenticate();
    console.log('✅ Connected to database successfully.');

    // Sync models (create tables)
    await sequelize.sync({ force: false, alter: true });
    console.log('✅ Database tables synchronized.');

    await sequelize.close();
    return true;
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    return false;
  }
};

// Run setup if this file is executed directly
if (require.main === module) {
  setupDatabase()
    .then((success) => {
      if (success) {
        console.log('✅ Database setup completed successfully.');
        process.exit(0);
      } else {
        console.log('❌ Database setup failed.');
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error('❌ Database setup error:', error);
      process.exit(1);
    });
}

export default setupDatabase; 