const express = require("express");
const developerController = require("../controllers/developerController");

const router = express.Router();

router.patch("/task/:taskId", developerController.updateTaskStatus);

module.exports = router;
