const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const todoRoute = require("./routes/todoRoute");

app.use("/todos", todoRoute);

app.listen(process.env.PORT, () => {
  console.log(`berhasil tersambung ke port = ${process.env.PORT}`);
});
