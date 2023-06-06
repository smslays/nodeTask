const Task = require("../models/Task");

// Update the status of a task assigned to the developer
exports.updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    await Task.findByIdAndUpdate(taskId, { status });
    res.json({ message: "Task status updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
