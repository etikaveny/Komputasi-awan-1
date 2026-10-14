const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test_db'
});

db.connect((err) => {
  if (err) {
    console.log('Koneksi database gagal: ', err);
  } else {
    console.log('Terhubung ke database MySQL!');
  }
});

app.get('/', (req, res) => {
  res.send('Halo! Aplikasi Node.js + MySQL + Docker + Jenkins berhasil berjalan.');
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
