const express = require('express');
const router = express.Router();
const { schedulatorController } = require('../controllers')

router.get('/schedulator', schedulatorController.getRandomTasks);

router.post('/custom-tasks-schedulator', schedulatorController.getScheduleOwnTasks);

module.exports = router;