
const express = require('express');
const managerController = require('../controllers/managerController');

const router = express.Router();

router.post('/task', managerController.createTask);
router.get('/tasks/:projectId', managerController.getTasksOverview);

module.exports = router;
