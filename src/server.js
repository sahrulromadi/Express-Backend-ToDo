require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(
  cors({
    methods: "GET, POST, PATCH, DELETE",
  })
);

// route
const todoRoute = require("./routes/todoRoute");
app.use("/todos", todoRoute);

// middleware page not found
const notFoundHandler = require("./middlewares/404pageNotFound");
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`berhasil tersambung ke port = ${PORT}`);
});
