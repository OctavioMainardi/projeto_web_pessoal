const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/tasks", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/tasks.html"));
});

module.exports = router;
