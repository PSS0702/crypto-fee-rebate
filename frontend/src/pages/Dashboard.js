import React, { useState, useEffect, useCallback } from 'react';
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

  // ... (나머지 코드는 이전과 동일)

  return (
    // ... (렌더링 코드는 이전과 동일)
  );
}

export default React.memo(Dashboard);
