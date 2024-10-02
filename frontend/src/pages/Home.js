import React from 'react';
import { Button, Container, Typography } from '@mui/material';  // 수정된 import 경로

function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Crypto Fee Rebate
      </Typography>
      <Typography variant="body1" paragraph>
        Get the best fee rebates on your crypto transactions by signing up with our referral codes.
      </Typography>
      <Button variant="contained" color="primary">
        Sign Up Now
      </Button>
    </Container>
  );
}

export default Home;
