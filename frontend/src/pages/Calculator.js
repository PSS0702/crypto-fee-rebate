import React, { useState, useEffect } from 'react';
import { getExchanges, calculateRebate } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper } from '@material-ui/core';

function Calculator() {
  const [exchanges, setExchanges] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState('');
  const [tradeVolume, setTradeVolume] = useState('');
  const [rebate, setRebate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExchanges();
  }, []);

  const fetchExchanges = async () => {
    try {
      const data = await getExchanges();
      setExchanges(data);
    } catch (err) {
      setError('Failed to fetch exchanges');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await calculateRebate({
        exchangeId: selectedExchange,
        tradeVolume: parseFloat(tradeVolume)
      });
      setRebate(result.rebate);
    } catch (err) {
      setError('Failed to calculate rebate');
    }
    setLoading(false);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" gutterBottom>Rebate Calculator</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="exchange-select-label">Select Exchange</InputLabel>
          <Select
            labelId="exchange-select-label"
            value={selectedExchange}
            onChange={(e) => setSelectedExchange(e.target.value)}
            required
          >
            {exchanges.map((exchange) => (
              <MenuItem key={exchange._id} value={exchange._id}>{exchange.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Trade Volume (USD)"
          type="number"
          value={tradeVolume}
          onChange={(e) => setTradeVolume(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          Calculate Rebate
        </Button>
      </form>
      {error && <ErrorMessage message={error} />}
      {rebate !== null && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Estimated Rebate: ${rebate.toFixed(2)} USD
        </Typography>
      )}
    </Paper>
  );
}

export default Calculator;
