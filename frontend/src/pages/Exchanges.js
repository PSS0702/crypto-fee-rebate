import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
}));

function Exchanges() {
  const classes = useStyles();
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    // This is where you would fetch the exchanges data from your API
    // For now, we'll use dummy data
    const dummyExchanges = [
      {
        id: 1,
        name: 'Binance',
        url: 'https://www.binance.com',
        feeStructure: {
          maker: 0.1,
          taker: 0.1,
          withdrawal: 0.0005,
        },
      },
      {
        id: 2,
        name: 'Coinbase Pro',
        url: 'https://pro.coinbase.com',
        feeStructure: {
          maker: 0.5,
          taker: 0.5,
          withdrawal: 0,
        },
      },
      // Add more exchanges as needed
    ];
    setExchanges(dummyExchanges);
  }, []);

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Supported Exchanges
      </Typography>
      <Grid container spacing={4}>
        {exchanges.map((exchange) => (
          <Grid item key={exchange.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {exchange.name}
                </Typography>
                <Typography>
                  <a href={exchange.url} target="_blank" rel="noopener noreferrer">
                    Visit Exchange
                  </a>
                </Typography>
                <TableContainer component={Paper}>
                  <Table className={classes.table} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Fee Type</TableCell>
                        <TableCell align="right">Rate</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(exchange.feeStructure).map(([feeType, rate]) => (
                        <TableRow key={feeType}>
                          <TableCell component="th" scope="row">
                            {feeType.charAt(0).toUpperCase() + feeType.slice(1)}
                          </TableCell>
                          <TableCell align="right">{rate}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Exchanges;
