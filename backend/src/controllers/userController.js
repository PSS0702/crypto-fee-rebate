exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    // 여기에서 사용자의 거래 데이터를 가져오는 로직을 구현해야 합니다.
    // 이 예제에서는 가상의 데이터를 사용합니다.
    const dashboardData = {
      username: user.username,
      totalTrades: 50,
      totalVolume: 100000,
      totalRebates: 500,
      recentTrades: [
        { date: new Date(), exchange: 'Binance', volume: 1000, rebate: 5 },
        { date: new Date(), exchange: 'Coinbase', volume: 2000, rebate: 10 },
        { date: new Date(), exchange: 'Kraken', volume: 1500, rebate: 7.5 },
      ]
    };
    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data', error: error.message });
  }
};
