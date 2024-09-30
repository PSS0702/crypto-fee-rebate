const Exchange = require('../models/Exchange');
const exchangeApiService = require('../services/exchangeApiService');

exports.getAllExchanges = async (req, res) => {
  try {
    const exchanges = await Exchange.find();
    res.json(exchanges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getExchangeById = async (req, res) => {
  try {
    const exchange = await Exchange.findById(req.params.id);
    if (!exchange) return res.status(404).json({ message: 'Exchange not found' });
    res.json(exchange);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createExchange = async (req, res) => {
  const exchange = new Exchange({
    name: req.body.name,
    url: req.body.url,
    feeStructure: req.body.feeStructure
  });

  try {
    const newExchange = await exchange.save();
    res.status(201).json(newExchange);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateExchange = async (req, res) => {
  try {
    const updatedExchange = await Exchange.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedExchange);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteExchange = async (req, res) => {
  try {
    await Exchange.findByIdAndDelete(req.params.id);
    res.json({ message: 'Exchange deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
