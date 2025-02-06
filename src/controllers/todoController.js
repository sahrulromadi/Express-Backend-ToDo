const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();

    res.status(200).json({
      message: "berhasil get all todos",
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal get all todos",
      serverError: error.message,
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.getTodo(id);

    // jika todo tidak ditemukan
    if (!result) {
      return res.status(404).json({
        message: "id tidak ditemukan di data",
        data: null,
      });
    }

    res.status(200).json({
      message: "berhasil get todo",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal get todo",
      serverError: error.message,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await Todo.create(title);

    res.status(201).json({
      message: "berhasil create todo",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal create todo",
      serverError: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const { id } = req.params;

    const todo = await Todo.update(title, completed, id);
    const resultQuery = todo[0];
    const todoAfterUpdate = todo[1];

    // jika id tidak ada
    if (resultQuery.affectedRows < 1) {
      return res.status(404).json({
        message: "id tidak ditemukan di data",
      });
    }

    res.status(200).json({
      message: "berhasil update todo",
      data: todoAfterUpdate,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal update todo",
      serverError: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.destroy(id);

    // jika id tidak ada
    if (result.affectedRows < 1) {
      return res.status(404).json({
        message: "id tidak ditemukan di data",
      });
    }

    res.status(200).json({
      message: "berhasil delete todo",
      data: {
        id,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal delete todo",
      serverError: error.message,
    });
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
