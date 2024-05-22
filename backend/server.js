// server.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'your_dbuser',
  host: 'your_dbhost',
  database: 'your_dbname',
  password: 'your_dbpassword',
  port: 'your_dbport',
});

app.use(express.json());

app.get('/faturas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM faturas');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
