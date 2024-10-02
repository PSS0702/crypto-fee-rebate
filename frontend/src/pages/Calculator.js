import React from 'react';
import { Button, Container, Typography } from '@mui/material';  // 수정된 import 경로

function Calculator() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fee Rebate Calculator
      </Typography>
      <Typography variant="body1">
        Use this calculator to estimate your fee rebates.
      </Typography>
      <Button variant="contained" color="primary">
        Calculate
      </Button>
    </Container>
  );
}

export default Calculator;
