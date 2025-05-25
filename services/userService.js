const db = require("../config/db");
const User = require("../models/User");

const getAllUsers = async () => {
  try {
    const result = await db.query("SELECT id, username, email FROM users");
    return result.rows.map((row) => new User({ ...row, password: undefined }));
  } catch (error) {
    throw new Error("Erro ao obter usuários: " + error.message);
  }
};

const getUserById = async (id) => {
  try {
    const result = await db.query(
      "SELECT id, username, email FROM users WHERE id = $1",
      [id]
    );
    if (!result.rows[0]) return null;
    return new User({ ...result.rows[0], password: undefined });
  } catch (error) {
    throw new Error("Erro ao obter usuário: " + error.message);
  }
};

const registerUser = async (username, email, password) => {
  try {
    const result = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
      [username, email, password]
    );
    return new User({ ...result.rows[0], password });
  } catch (error) {
    throw new Error("Erro ao registrar usuário: " + error.message);
  }
};

const loginUser = async (usernameOrEmail, password) => {
  try {
    const result = await db.query(
      "SELECT * FROM users WHERE (username = $1 OR email = $1) AND password = $2",
      [usernameOrEmail, password]
    );
    if (!result.rows[0]) return null;
    return new User(result.rows[0]);
  } catch (error) {
    throw new Error("Erro ao fazer login: " + error.message);
  }
};

const deleteUser = async (id) => {
  try {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING id, username, email",
      [id]
    );
    if (!result.rows[0]) return null;
    return new User({ ...result.rows[0], password: undefined });
  } catch (error) {
    throw new Error("Erro ao deletar usuário: " + error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  deleteUser,
};
