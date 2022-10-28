const express = require('express');
const router = express.Router();
const { rankController } = require('../controllers')

router.post('/word-count-ranking', rankController.getRanking);

module.exports = router