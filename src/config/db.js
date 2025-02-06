const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

// dengan callback
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("gagal terkoneksi database = ", err.message);
//   } else {
//     console.log("berhasil terkoneksi database");
//     connection.release(); // kembalikan kembali ke pool
//   }
// });

// dengan promise | IIFE -> langsung ter eksekusi
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("berhasil terkoneksi ke database");
    connection.release();
  } catch (err) {
    console.error("gagal terkoneksi ke database:", err.message);
  }
})();

module.exports = pool;
