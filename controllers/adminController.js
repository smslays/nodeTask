const User = require("../models/User");

// Create a new Manager account
exports.createManager = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const manager = new User({
      name,
      email,
      password,
      role: "manager",
    });
    await manager.save();
    res.status(201).json({ message: "Manager account created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new Developer account
exports.createDeveloper = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const developer = new User({
      name,
      email,
      password,
      role: "developer",
    });
    await developer.save();
    res.status(201).json({ message: "Developer account created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
