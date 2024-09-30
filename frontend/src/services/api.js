export const getUserDashboard = async () => {
  try {
    // This is a mock implementation. In a real app, you would fetch this data from your backend.
    const response = {
      data: {
        username: "JohnDoe",
        totalTrades: 50,
        totalVolume: 100000,
        totalRebates: 500,
        recentTrades: [
          { date: "2023-05-01", exchange: "Binance", volume: 1000, rebate: 5 },
          { date: "2023-05-02", exchange: "Coinbase", volume: 2000, rebate: 10 },
          { date: "2023-05-03", exchange: "Kraken", volume: 1500, rebate: 7.5 },
          { date: "2023-05-04", exchange: "Binance", volume: 3000, rebate: 15 },
          { date: "2023-05-05", exchange: "Coinbase", volume: 2500, rebate: 12.5 },
          { date: "2023-05-06", exchange: "Kraken", volume: 1800, rebate: 9 },
          { date: "2023-05-07", exchange: "Binance", volume: 2200, rebate: 11 },
        ]
      }
    };
    return response.data;
  } catch (error) {
    console.error('Error fetching user dashboard:', error);
    throw error;
  }
};
