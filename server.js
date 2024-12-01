// Import required modules
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  // Connect to MySQL
db.connect((err) => {
    if (err) {
      console.error('error connecting to MySQL:', err.stack);
      return;
    }
    console.log('connected to MySQL as id ' + db.threadId);
  });

  // Define a route to test the connection
app.get('/', (req, res) => {
    res.send('Hello, Express and MySQL!');
  });

  
  // Example of a route that interacts with the MySQL database
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        res.status(500).send('Error fetching users');
        return;
      }
      res.json(results);
    });
  });

  // Set the server to listen on a specific port
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
