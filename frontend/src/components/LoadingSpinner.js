import React from 'react';
import { CircularProgress } from '@material-ui/core';

function LoadingSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </div>
  );
}

export default LoadingSpinner;
