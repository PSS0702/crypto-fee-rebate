import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getUserDashboard } from '../services/api';
import socketService from '../services/socketService';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = useCallback(async () => {
    try {
      const data = await getUserDashboard();
      setDashboardData(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch dashboard data');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();

    socketService.connect();
    socketService.on('dashboardUpdate', (data) => {
      setDashboardData(prevData => ({
        ...prevData,
        ...data
      }));
    });

    return () => {
      socketService.disconnect();
    };
  }, [fetchDashboardData]);

  const lineChartData = useMemo(() => {
    return dashboardData ? dashboardData.recentTrades.map(trade => ({
      date: new Date(trade.date).toLocaleDateString(),
      volume: trade.volume,
      rebate: trade.rebate
    })) : [];
  }, [dashboardData]);

  const pieChartData = useMemo(() => {
    return dashboardData ? dashboardData.recentTrades.reduce((acc, trade) => {
      const existingExchange = acc.find(item => item.name === trade.exchange);
      if (existingExchange) {
        existingExchange.value += trade.volume;
      } else {
        acc.push({ name: trade.exchange, value: trade.volume });
      }
      return acc;
    }, []) : [];
  }, [dashboardData]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

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

          <Typography variant="h5" style={{ marginTop: '40px', marginBottom: '20px' }}>Trading Activity</Typography>
          <Paper style={{ padding: '20px' }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#8884d8" name="Trade Volume" />
                <Line yAxisId="right" type="monotone" dataKey="rebate" stroke="#82ca9d" name="Rebate" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>

          <Typography variant="h5" style={{ marginTop: '40px', marginBottom: '20px' }}>Volume by Exchange</Typography>
          <Paper style={{ padding: '20px' }}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>

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

export default React.memo(Dashboard);
