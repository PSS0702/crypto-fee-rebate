import React, { useState, useEffect } from 'react';
import { getUserDashboard } from '../services/api';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const data = await getUserDashboard();
      setDashboardData(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch dashboard data');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h2>User Dashboard</h2>
      {dashboardData && (
        <div>
          <h3>Welcome, {dashboardData.username}!</h3>
          <div className="dashboard-stats">
            <div className="stat-box">
              <h4>Total Trades</h4>
              <p>{dashboardData.totalTrades}</p>
            </div>
            <div className="stat-box">
              <h4>Total Volume</h4>
              <p>${dashboardData.totalVolume.toFixed(2)}</p>
            </div>
            <div className="stat-box">
              <h4>Total Rebates Earned</h4>
              <p>${dashboardData.totalRebates.toFixed(2)}</p>
            </div>
          </div>
          <h4>Recent Trades</h4>
          <table className="recent-trades">
            <thead>
              <tr>
                <th>Date</th>
                <th>Exchange</th>
                <th>Volume</th>
                <th>Rebate</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentTrades.map((trade, index) => (
                <tr key={index}>
                  <td>{new Date(trade.date).toLocaleDateString()}</td>
                  <td>{trade.exchange}</td>
                  <td>${trade.volume.toFixed(2)}</td>
                  <td>${trade.rebate.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
