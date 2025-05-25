const taskService = require("../services/taskService");

const addTask = async (req, res) => {
  try {
    const userId = req.body.userId || req.params.userId;
    const { title, description } = req.body;
    if (!userId || !title) {
      return res.status(400).json({ error: "userId and title are required" });
    }
    const task = await taskService.addTask(userId, { title, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeTask = async (req, res) => {
  try {
    const userId = req.body.userId || req.params.userId;
    const taskId = req.body.taskId || req.params.taskId;
    if (!userId || !taskId) {
      return res.status(400).json({ error: "userId and taskId are required" });
    }
    const removed = await taskService.removeTask(userId, taskId);
    if (removed) {
      res.status(200).json(removed);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const markTaskCompleted = async (req, res) => {
  try {
    const userId = req.body.userId || req.params.userId;
    const taskId = req.body.taskId || req.params.taskId;
    if (!userId || !taskId) {
      return res.status(400).json({ error: "userId and taskId are required" });
    }
    const updated = await taskService.markTaskCompleted(userId, taskId);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTasksByUser = async (req, res) => {
  try {
    const userId = req.params.userId || req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }
    const tasks = await taskService.getTasksByUser(userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addTask,
  removeTask,
  markTaskCompleted,
  getTasksByUser,
};
