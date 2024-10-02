import React from 'react';
import { Typography, Container } from '@mui/material';  // 수정된 import 경로

function Footer() {
  return (
    <footer>
      <Container>
        <Typography variant="body1">
          © 2024 Crypto Fee Rebate
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
