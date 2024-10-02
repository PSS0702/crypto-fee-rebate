import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

// Dummy data for the chart
const chartData = [
  { name: 'Jan', volume: 4000, rebate: 240 },
  { name: 'Feb', volume: 3000, rebate: 180 },
  { name: 'Mar', volume: 5000, rebate: 300 },
  { name: 'Apr', volume: 2780, rebate: 167 },
  { name: 'May', volume: 1890, rebate: 113 },
  { name: 'Jun', volume: 2390, rebate: 143 },
];

// Dummy data for recent trades
const recentTrades = [
  { id: 1, date: '2023-06-01', exchange: 'Binance', volume: 1000, rebate: 2.5 },
  { id: 2, date: '2023-06-02', exchange: 'Coinbase', volume: 1500, rebate: 3.75 },
  { id: 3, date: '2023-06-03', exchange: 'Kraken', volume: 800, rebate: 2 },
];

function Dashboard() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={`${classes.paper} ${classes.fixedHeight}`}>
            <Typography variant="h6">Trading Volume and Rebates</Typography>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 24,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="volume" fill="#8884d8" name="Volume" />
                <Bar yAxisId="right" dataKey="rebate" fill="#82ca9d" name="Rebate" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Recent trades */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Recent Trades</Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Exchange</TableCell>
                    <TableCell align="right">Volume</TableCell>
                    <TableCell align="right">Rebate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentTrades.map((trade) => (
                    <TableRow key={trade.id}>
                      <TableCell>{trade.date}</TableCell>
                      <TableCell>{trade.exchange}</TableCell>
                      <TableCell align="right">${trade.volume}</TableCell>
                      <TableCell align="right">${trade.rebate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
