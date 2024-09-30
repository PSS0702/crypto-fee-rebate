import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Paper } from '@material-ui/core';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Crypto Fee Rebate
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Find the best rebates for your crypto trades!
      </Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Compare Exchanges</Typography>
            <Typography>View and compare fee structures across multiple exchanges.</Typography>
            <Button variant="contained" color="primary" component={Link} to="/exchanges" style={{ marginTop: '10px' }}>
              View Exchanges
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Calculate Rebates</Typography>
            <Typography>Use our calculator to estimate your potential rebates.</Typography>
            <Button variant="contained" color="primary" component={Link} to="/calculator" style={{ marginTop: '10px' }}>
              Use Calculator
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Track Your Savings</Typography>
            <Typography>Sign up to track your rebates and maximize your savings.</Typography>
            <Button variant="contained" color="primary" component={Link} to="/auth" style={{ marginTop: '10px' }}>
              Sign Up Now
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
