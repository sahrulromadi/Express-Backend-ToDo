const db = require("../config/db");

const getAll = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM todos");

    return rows;
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
  getTodo,
  create,
  update,
  destroy,
};
