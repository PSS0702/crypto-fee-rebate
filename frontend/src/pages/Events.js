import React from 'react';
import { Button, Container, Typography } from '@mui/material';

function Events() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Latest Events
      </Typography>
      <Typography variant="body1">
        Stay updated with the latest events and promotions.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Container>
  );
}

export default Events;
