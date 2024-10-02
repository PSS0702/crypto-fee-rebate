import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '50px',
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <img src="/path/to/your/logo.png" alt="Logo" className={classes.logo} />
        </Link>
        <Typography variant="h6" className={classes.title}>
          Crypto Fee Rebate
        </Typography>
        <Button color="inherit" component={Link} to="/exchanges">거래소</Button>
        <Button color="inherit" component={Link} to="/events">이벤트</Button>
        <Button color="inherit" component={Link} to="/login">로그인</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
