const { Client } = require('pg');
require('dotenv').config();

async function setupDatabase() {
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: 'postgres' // Connect to default database first
  });

  try {
    console.log('🔧 Setting up PostgreSQL database...');
    
    // Connect to PostgreSQL
    await client.connect();
    console.log('✅ Connected to PostgreSQL successfully.');

    // Check if database exists
    const dbCheck = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [process.env.DB_NAME || 'intellithesis']
    );

    if (dbCheck.rows.length === 0) {
      // Create database
      await client.query(`CREATE DATABASE ${process.env.DB_NAME || 'intellithesis'}`);
      console.log(`✅ Database '${process.env.DB_NAME || 'intellithesis'}' created successfully.`);
    } else {
      console.log(`✅ Database '${process.env.DB_NAME || 'intellithesis'}' already exists.`);
    }

    await client.end();
    console.log('✅ Database setup completed successfully.');
    return true;
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    console.log('\n📋 To fix this, please:');
    console.log('1. Make sure PostgreSQL is running');
    console.log('2. Check your .env file has correct database credentials');
    console.log('3. Make sure the postgres user has the correct password');
    console.log('\n💡 You can set the postgres password with:');
    console.log('   psql -U postgres -c "ALTER USER postgres PASSWORD \'password\';"');
    return false;
  }
}

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

module.exports = setupDatabase; 