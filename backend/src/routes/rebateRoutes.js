const express = require('express');
const router = express.Router();
const rebateController = require('../controllers/rebateController');

router.post('/calculate', rebateController.calculateRebate);

module.exports = router;
