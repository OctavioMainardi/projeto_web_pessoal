const db = require("../config/db");
const Task = require("../models/Task");

const addTaskRepo = async (userId, { title, description }) => {
  const result = await db.query(
    "INSERT INTO tasks (title, description, completed, userId) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, description, false, userId]
  );
  return new Task(result.rows[0]);
};

const removeTaskRepo = async (userId, taskId) => {
  const result = await db.query(
    "DELETE FROM tasks WHERE id = $1 AND userId = $2 RETURNING *",
    [taskId, userId]
  );
  return result.rows[0] ? new Task(result.rows[0]) : null;
};

const markTaskCompletedRepo = async (userId, taskId) => {
  const result = await db.query(
    "UPDATE tasks SET completed = true WHERE id = $1 AND userId = $2 RETURNING *",
    [taskId, userId]
  );
  return result.rows[0] ? new Task(result.rows[0]) : null;
};

const getTasksByUserRepo = async (userId) => {
  const result = await db.query(
    "SELECT * FROM tasks WHERE userId = $1 ORDER BY created_at DESC",
    [userId]
  );
  return result.rows.map((row) => new Task(row));
};

module.exports = {
  addTaskRepo,
  removeTaskRepo,
  markTaskCompletedRepo,
  getTasksByUserRepo,
};
