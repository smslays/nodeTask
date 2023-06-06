const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const adminRoutes = require("./routes/adminRoutes");
const managerRoutes = require("./routes/managerRoutes");
const developerRoutes = require("./routes/developerRoutes");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/office-api`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Routes
app.use("/admin", adminRoutes);
app.use("/manager", managerRoutes);
app.use("/developer", developerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
const port = 2020;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
