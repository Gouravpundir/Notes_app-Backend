const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

module.exports = pool;
