const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./config/db");

app.listen(process.env.PORT, () => {
  console.log(`berhasil tersambung ke port = ${process.env.PORT}`);
});
