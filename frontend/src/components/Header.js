import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';  // 수정된 import 경로
import { Icon } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Crypto Fee Rebate
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
