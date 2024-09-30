// backend/src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 라우트 설정
const exchangeRoutes = require('./routes/exchangeRoutes');
const userRoutes = require('./routes/userRoutes');
const rebateRoutes = require('./routes/rebateRoutes');

app.use('/api/exchanges', exchangeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rebates', rebateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// backend/src/config.js
module.exports = {
  mongoURI: 'mongodb://localhost:27017/crypto_fee_rebate',
  jwtSecret: 'your_jwt_secret'
};

// backend/src/routes/exchangeRoutes.js
const express = require('express');
const router = express.Router();
const exchangeController = require('../controllers/exchangeController');

router.get('/', exchangeController.getAllExchanges);
router.get('/:id', exchangeController.getExchangeById);
router.post('/', exchangeController.createExchange);
router.put('/:id', exchangeController.updateExchange);
router.delete('/:id', exchangeController.deleteExchange);

module.exports = router;

// backend/src/controllers/exchangeController.js
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

// backend/src/models/Exchange.js
const mongoose = require('mongoose');

const exchangeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  feeStructure: { type: Object, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exchange', exchangeSchema);

// backend/src/services/exchangeApiService.js
const axios = require('axios');

exports.fetchExchangeData = async (exchangeUrl) => {
  try {
    const response = await axios.get(`${exchangeUrl}/api/fee-structure`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${exchangeUrl}:`, error);
    throw error;
  }
};

// 나머지 라우트와 컨트롤러 (user, rebate)도 비슷한 구조로 구현합니다.
