const db = require("../config/db");

const getAll = async () => {
  const [rows] = await db.query("SELECT * FROM todos");

  return rows;
};

const getTodo = async (id) => {
  const [result] = await db.execute("SELECT * FROM todos WHERE ID = ?", [id]);

  return result[0];
};

const create = async (title) => {
  const result = await db.execute("INSERT INTO todos (title) VALUES (?)", [
    title,
  ]);

  return {
    id: result[0].insertId,
    title,
    completed: false,
    created_at: new Date(),
    updated_at: new Date(),
  };
};

const update = async (title, completed, id) => {
  const [resultQuery] = await db.execute(
    "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
    [title, completed, id]
  );

  const [todoAfterUpdate] = await db.execute(
    "SELECT * FROM todos WHERE ID = ?",
    [id]
  );

  // return result query update dan data setelah update
  return [resultQuery, todoAfterUpdate[0]];
};

const destroy = async (id) => {
  const [result] = await db.execute("DELETE FROM todos WHERE id = ?", [id]);

  return result;
};

module.exports = {
  getAll,
  getTodo,
  create,
  update,
  destroy,
};
