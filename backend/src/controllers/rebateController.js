const Exchange = require('../models/Exchange');

exports.calculateRebate = async (req, res) => {
  try {
    const { exchangeId, tradeVolume } = req.body;
    const exchange = await Exchange.findById(exchangeId);
    
    if (!exchange) {
      return res.status(404).json({ message: 'Exchange not found' });
    }

    // 간단한 리베이트 계산 로직 (실제로는 더 복잡할 수 있습니다)
    let rebateRate = 0;
    for (const [level, rate] of Object.entries(exchange.feeStructure)) {
      if (tradeVolume >= parseFloat(level)) {
        rebateRate = rate;
      } else {
        break;
      }
    }

    const rebateAmount = (tradeVolume * rebateRate) / 100;

    res.json({ rebate: rebateAmount });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating rebate', error: error.message });
  }
};
