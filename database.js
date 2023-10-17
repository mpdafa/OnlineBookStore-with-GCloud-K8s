const mysql = require("mysql2/promise");
const config = require("./config.json");

// Create a connection pool
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to execute SQL queries
async function executeQuery(query, values = []) {
  const connection = await pool.getConnection();
  try {
    const [rows, fields] = await connection.query(query, values);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  executeQuery,
};
