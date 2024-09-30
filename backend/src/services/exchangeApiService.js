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
