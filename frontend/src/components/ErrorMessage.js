import React from 'react';
import { Typography, Paper } from '@material-ui/core';

function ErrorMessage({ message }) {
  return (
    <Paper style={{ padding: '20px', margin: '20px', backgroundColor: '#ffebee' }}>
      <Typography color="error">{message}</Typography>
    </Paper>
  );
}

export default ErrorMessage;
