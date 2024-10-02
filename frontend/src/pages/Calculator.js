import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Paper,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  formControl: {
    minWidth: 120,
    width: '100%',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  result: {
    marginTop: theme.spacing(3),
  },
}));

function Calculator() {
  const classes = useStyles();
  const [exchanges, setExchanges] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState('');
  const [tradeVolume, setTradeVolume] = useState('');
  const [rebate, setRebate] = useState(null);

  useEffect(() => {
    // Fetch exchanges (using dummy data for now)
    const dummyExchanges = [
      { id: 1, name: 'Binance' },
      { id: 2, name: 'Coinbase Pro' },
      // Add more exchanges as needed
    ];
    setExchanges(dummyExchanges);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // This is where you would make an API call to calculate the rebate
    // For now, we'll use a dummy calculation
    const dummyRebate = (parseFloat(tradeVolume) * 0.001).toFixed(2);
    setRebate(dummyRebate);
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Rebate Calculator
      </Typography>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="exchange-select-label">Exchange</InputLabel>
                <Select
                  labelId="exchange-select-label"
                  id="exchange-select"
                  value={selectedExchange}
                  onChange={(e) => setSelectedExchange(e.target.value)}
                  required
                >
                  {exchanges.map((exchange) => (
                    <MenuItem key={exchange.id} value={exchange.id}>
                      {exchange.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Trade Volume (USD)"
                type="number"
                value={tradeVolume}
                onChange={(e) => setTradeVolume(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Calculate Rebate
          </Button>
        </form>
        {rebate !== null && (
          <div className={classes.result}>
            <Typography variant="h6">
              Estimated Rebate: ${rebate} USD
            </Typography>
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default Calculator;
