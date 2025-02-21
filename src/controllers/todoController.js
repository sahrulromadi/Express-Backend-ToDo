const Todo = require("../models/Todo");
const handleError = require("../utils/errorHandling");
const handleSuccess = require("../utils/successHandling");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();

    handleSuccess(res, 200, "berhasil get all todos", todos);
  } catch (error) {
    handleError(res, 500, "gagal get all todos", error);
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.getTodo(id);

    // jika todo tidak ditemukan
    if (!result) {
      return handleError(res, 404, "id tidak ditemukan di data", "");
    }

    handleSuccess(res, 200, "berhasil get todo", result);
  } catch (error) {
    handleError(res, 500, "gagal get todo", error);
  }
};

const searchTodo = async (req, res) => {
  try {
    const { q } = req.query;
    const [results] = await Todo.searchByTitle(q);

    // jika todo tidak ditemukan
    if (results.length < 1) {
      return handleError(res, 404, "title tidak ditemukan di data", "");
    }

    handleSuccess(res, 200, "berhasil search todo", results);
  } catch (error) {
    handleError(res, 500, "gagal search todo", error);
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const newTodo = await Todo.create(title, completed);

    handleSuccess(res, 201, "berhasil create todo", newTodo);
  } catch (error) {
    handleError(res, 500, "gagal create todo", error);
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
      return handleError(res, 404, "id tidak ditemukan di data", "");
    }

    handleSuccess(res, 200, "berhasil update todo", todoAfterUpdate);
  } catch (error) {
    handleError(res, 500, "gagal update todo", error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.destroy(id);

    // jika id tidak ada
    if (result.affectedRows < 1) {
      return handleError(res, 404, "id tidak ditemukan di data", "");
    }

    handleSuccess(res, 200, "berhasil delete todo", { id: id });
  } catch (error) {
    handleError(res, 500, "gagal delete todo", error);
  }
};

module.exports = {
  getTodos,
  getTodo,
  searchTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
