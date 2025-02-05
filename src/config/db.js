const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("gagal terkoneksi database = ", err.message);
  } else {
    console.log("berhasil terkoneksi database");
    connection.release();
  }
});

module.exports = pool;
