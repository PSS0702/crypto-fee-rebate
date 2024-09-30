import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core';

function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link component={RouterLink} to="/" color="inherit" style={{ textDecoration: 'none' }}>
            Crypto Fee Rebate
          </Link>
        </Typography>
        <Button color="inherit" component={RouterLink} to="/exchanges">Exchanges</Button>
        <Button color="inherit" component={RouterLink} to="/calculator">Calculator</Button>
        {isAuthenticated ? (
          <>
            <Button color="inherit" component={RouterLink} to="/dashboard">Dashboard</Button>
            <Button color="inherit" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button color="inherit" component={RouterLink} to="/auth">Login/Register</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
