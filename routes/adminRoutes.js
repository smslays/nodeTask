const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.post("/manager", adminController.createManager);
router.post("/developer", adminController.createDeveloper);

module.exports = router;
