// const Project = require("../models/Project");
const Task = require("../models/Task");

// Create a new task in a project
exports.createTask = async (req, res) => {
  try {
    const { project, title, assignedTo } = req.body;
    const task = new Task({
      project,
      title,
      assignedTo,
    });
    await task.save();
    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an overview of tasks in a project assigned to the manager
exports.getTasksOverview = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.find({ project: projectId }).select("status");
    const overview = {
      TODO: tasks.filter((task) => task.status === "TODO").length,
      "IN PROGRESS": tasks.filter((task) => task.status === "IN PROGRESS")
        .length,
      DONE: tasks.filter((task) => task.status === "DONE").length,
    };
    res.json(overview);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
