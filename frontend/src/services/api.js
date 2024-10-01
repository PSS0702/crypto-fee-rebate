import axios from 'axios';

// getUserDashboard 함수
export const getUserDashboard = async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      // 개발 환경에서는 모의 데이터를 사용
      const mockResponse = {
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
      return mockResponse.data;
    } else {
      // 프로덕션 환경에서는 실제 API 요청
      const response = await axios.get('/api/user-dashboard');
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching user dashboard:', error);
    throw error;
  }
};

// login 함수
export const login = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// register 함수 추가
export const register = async (username, password) => {
  try {
    const response = await axios.post('/api/register', { username, password });
    return response.data;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};
