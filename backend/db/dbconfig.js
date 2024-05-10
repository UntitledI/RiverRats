const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    server: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    options:{
      port : parseInt(process.env.DATABASE_PORT, 10),
      trustServerCertificate: true,
    }
  
  }

  module.exports = config;