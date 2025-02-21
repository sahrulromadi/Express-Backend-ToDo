const db = require("../config/db");

const getAll = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM todos");

    return rows;
  } catch (error) {
    throw error;
  }
};

const getPaginationTodo = async (limit, offset) => {
  try {
    const [rows] = await db.query("SELECT * FROM todos LIMIT ? OFFSET ?", [
      limit,
      offset,
    ]);

    const [total] = await db.query("SELECT COUNT (*) AS total_data FROM todos");

    // return object
    return {
      todos: rows,
      total_data: total[0].total_data,
    };
  } catch (error) {
    throw error;
  }
};

const getTodo = async (id) => {
  try {
    const [result] = await db.execute("SELECT * FROM todos WHERE ID = ?", [id]);

    return result[0];
  } catch (error) {
    throw error;
  }
};

const searchByTitle = async (title) => {
  try {
    const rows = await db.execute("SELECT * FROM todos WHERE title LIKE ?", [
      title,
    ]);

    return rows;
  } catch (error) {
    throw error;
  }
};

const create = async (title, completed) => {
  try {
    const result = await db.execute(
      "INSERT INTO todos (title, completed) VALUES (?, ?)",
      [title, completed]
    );

    return {
      id: result[0].insertId,
      title,
      completed,
      created_at: new Date(),
      updated_at: new Date(),
    };
  } catch (error) {
    throw error;
  }
};

const update = async (title, completed, id) => {
  try {
    const [resultQuery] = await db.execute(
      "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
      [title, completed, id]
    );

    // membuat query baru agar bisa mendapatkan data created at dan updated at
    const [todoAfterUpdate] = await db.execute(
      "SELECT * FROM todos WHERE ID = ?",
      [id]
    );

    // return result query update dan data setelah update
    return [resultQuery, todoAfterUpdate[0]];
  } catch (error) {
    throw error;
  }
};

const destroy = async (id) => {
  try {
    const [result] = await db.execute("DELETE FROM todos WHERE id = ?", [id]);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  getPaginationTodo,
  getTodo,
  searchByTitle,
  create,
  update,
  destroy,
};
