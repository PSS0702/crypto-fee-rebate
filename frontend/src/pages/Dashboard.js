import React, { useState, useEffect } from 'react';
import { getUserDashboard } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

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

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      {dashboardData && (
        <>
          <Typography variant="h5">Welcome, {dashboardData.username}!</Typography>
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={4}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Total Trades</Typography>
                <Typography variant="h4">{dashboardData.totalTrades}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Total Volume</Typography>
                <Typography variant="h4">${dashboardData.totalVolume.toFixed(2)}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Total Rebates Earned</Typography>
                <Typography variant="h4">${dashboardData.totalRebates.toFixed(2)}</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="h5" style={{ marginTop: '40px', marginBottom: '20px' }}>Recent Trades</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Exchange</TableCell>
                  <TableCell align="right">Volume</TableCell>
                  <TableCell align="right">Rebate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dashboardData.recentTrades.map((trade, index) => (
                  <TableRow key={index}>
                    <TableCell>{new Date(trade.date).toLocaleDateString()}</TableCell>
                    <TableCell>{trade.exchange}</TableCell>
                    <TableCell align="right">${trade.volume.toFixed(2)}</TableCell>
                    <TableCell align="right">${trade.rebate.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}

export default Dashboard;
