import React from 'react';
import { Button, Container, Typography } from '@mui/material';  // 수정된 import 경로

function Exchanges() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Supported Exchanges
      </Typography>
      <Typography variant="body1">
        Here is a list of all the supported exchanges for fee rebates.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Container>
  );
}

export default Exchanges;
