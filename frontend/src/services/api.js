import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getExchanges = async () => {
  try {
    const response = await axios.get(`${API_URL}/exchanges`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    throw error;
  }
};

export const calculateRebate = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/rebates/calculate`, data);
    return response.data;
  } catch (error) {
    console.error('Error calculating rebate:', error);
    throw error;
  }
};

// Add more API calls as needed
