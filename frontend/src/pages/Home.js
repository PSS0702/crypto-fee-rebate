import React from 'react';
import { Typography, Container, Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Crypto Fee Rebate
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Maximize your crypto trading profits by calculating and comparing fee rebates across multiple exchanges.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary" component={RouterLink} to="/calculator">
                  Try Calculator
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" component={RouterLink} to="/exchanges">
                  View Exchanges
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {[1, 2, 3].map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Paper className={classes.card}>
                <Typography gutterBottom variant="h5" component="h2">
                  Feature {card}
                </Typography>
                <Typography className={classes.cardContent}>
                  This is a description of a key feature of our platform. It explains how users can benefit from using our service.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default Home;
