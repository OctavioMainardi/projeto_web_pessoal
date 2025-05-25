const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/", taskController.addTask);

router.delete("/:taskId", taskController.removeTask);

router.patch("/:taskId/complete", taskController.markTaskCompleted);

router.get('/user/:userId', taskController.getTasksByUser);

module.exports = router;
