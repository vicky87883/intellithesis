import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const setupDatabase = async () => {
  try {
    console.log('🔧 Setting up PostgreSQL database...');
    
    // Connect to the database
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'intellithesis',
      logging: false,
      dialectOptions: {
        ssl: false
      }
    });

    // Test connection
    await sequelize.authenticate();
    console.log('✅ Connected to PostgreSQL successfully.');

    // Import models to register them
    const User = require('../models/User').default;
    const Document = require('../models/Document').default;

    // Sync models (create tables)
    await sequelize.sync({ force: false, alter: true });
    console.log('✅ Database tables synchronized.');

    await sequelize.close();
    console.log('✅ Database setup completed successfully.');
    return true;
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    console.log('\n📋 To fix this, please:');
    console.log('1. Make sure PostgreSQL is running');
    console.log('2. Create a .env file with correct database credentials');
    console.log('3. Set the correct password for postgres user');
    console.log('\n💡 You can set the postgres password with:');
    console.log('   psql -U postgres -c "ALTER USER postgres PASSWORD \'password\';"');
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