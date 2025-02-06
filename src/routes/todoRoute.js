const express = require("express");
const router = express.Router();

// controllers
const todoController = require("../controllers/todoController");

// middlewares
const validateRequest = require("../middlewares/validateRequest");

router.get("/", todoController.getTodos);
router.get("/:id", todoController.getTodo);
router.post("/", validateRequest, todoController.createTodo);
router.patch("/:id", validateRequest, todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
