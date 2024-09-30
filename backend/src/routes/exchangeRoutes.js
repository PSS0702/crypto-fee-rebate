const express = require('express');
const router = express.Router();
const exchangeController = require('../controllers/exchangeController');

router.get('/', exchangeController.getAllExchanges);
router.get('/:id', exchangeController.getExchangeById);
router.post('/', exchangeController.createExchange);
router.put('/:id', exchangeController.updateExchange);
router.delete('/:id', exchangeController.deleteExchange);

module.exports = router;
