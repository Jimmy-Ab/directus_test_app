const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables

module.exports = function registerEndpoint(router, { services, exceptions }) {
    const app = express();

    // Middleware for parsing JSON
    app.use(express.json());

    // MySQL connection pool
    const pool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',   // Replace with your DB host
        user: process.env.DB_USER || 'root',       // Replace with your DB username
        password: process.env.DB_PASSWORD || '',   // Replace with your DB password
        database: process.env.DB_DATABASE || 'directus_app_db', // Replace with your DB name
    });

    // Test route: Check DB connection
    app.get('/db-test', async (req, res) => {
        try {
            const [rows] = await pool.query('SELECT NOW() AS current_time');
            res.json({
                message: 'Database connected successfully!',
                current_time: rows[0].current_time,
            });
        } catch (error) {
            console.error('Database connection error:', error);
            res.status(500).json({ error: 'Database connection failed' });
        }
    });

    // Example route: Get all users
    app.get('/users', async (req, res) => {
        try {
            const [rows] = await pool.query('SELECT * FROM users'); // Replace 'users' with your table name
            res.json(rows);
        } catch (error) {
            console.error('Database query error:', error);
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });

    // Mount the Express app onto the Directus router
    router.use('/custom-api', app);
};
