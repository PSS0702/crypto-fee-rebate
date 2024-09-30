const mongoose = require('mongoose');

const exchangeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  feeStructure: { type: Object, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exchange', exchangeSchema);
