import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Typography variant="body1">
        View your account information and rebate history.
      </Typography>
      <Button variant="contained" color="primary">
        Update Information
      </Button>
    </Container>
  );
}

export default Dashboard;
