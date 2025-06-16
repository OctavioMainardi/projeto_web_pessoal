const db = require("../config/db");
const User = require("../models/User");
const { getAllUsersRepo, registerUserRepo, loginUserRepo, deleteUserRepo, getUserByIdRepo } = require("../repository/UserRepository.js")


const getAllUsers = async () => {
  return getAllUsersRepo()
};

const getUserById = async (id) => {
  return getUserByIdRepo(id)
};

const registerUser = async (username, email, password) => {
  const user = new User({ username, email, password })
  if(user.validateUsername() == false)
    throw new Error("Erro ao registrar usuário. Nome inválido (paia)")
  if(user.validatePassword() == false)
    throw new Error("Erro ao registrar usuário. Senha inválida (muito paia)")
  if(user.validateEmail() == false)
    throw new Error("Erro ao registrar usuário. Email inválido (E-meio paia)")
  return registerUserRepo(username, email, password)
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
