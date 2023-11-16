require('dotenv').config();

module.exports = {
    development: {
        username: 'postgres',
        password: process.env.DB_PASSWORD,
        database: 'postgres',
        host: 'db.kqjldcuhdzkedqtnjyxu.supabase.co',
        dialect: 'postgres',
    },
    test: {
        username: 'postgres',
        password: process.env.DB_PASSWORD,
        database: 'postgres',
        host: 'db.kqjldcuhdzkedqtnjyxu.supabase.co',
        dialect: 'postgres',
    },
    production: {
        username: 'postgres',
        password: process.env.DB_PASSWORD,
        database: 'postgres',
        host: 'db.kqjldcuhdzkedqtnjyxu.supabase.co',
        dialect: 'postgres',
    }
};
