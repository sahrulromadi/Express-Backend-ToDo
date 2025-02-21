const express = require("express");
const router = express.Router();

// controllers
const todoController = require("../controllers/todoController");

// middlewares
const validateRequest = require("../middlewares/validateRequest");

router.get("/", todoController.getTodos);
router.get("/:id(\\d+)", todoController.getTodo); // gunakan regex agar bisa angka saja
router.get("/search", todoController.searchTodo);
router.post("/", validateRequest, todoController.createTodo);
router.patch("/:id", validateRequest, todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
