import React, { useState, useEffect } from 'react';
import { getExchanges } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Typography, Card, CardContent, Grid, List, ListItem, ListItemText } from '@material-ui/core';

function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExchanges();
  }, []);

  const fetchExchanges = async () => {
    try {
      setLoading(true);
      const data = await getExchanges();
      setExchanges(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch exchanges. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Supported Exchanges</Typography>
      <Grid container spacing={3}>
        {exchanges.map((exchange) => (
          <Grid item xs={12} sm={6} md={4} key={exchange._id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">{exchange.name}</Typography>
                <Typography color="textSecondary" gutterBottom>
                  URL: <a href={exchange.url} target="_blank" rel="noopener noreferrer">{exchange.url}</a>
                </Typography>
                <Typography variant="h6">Fee Structure:</Typography>
                <List dense>
                  {Object.entries(exchange.feeStructure).map(([level, fee]) => (
                    <ListItem key={level}>
                      <ListItemText primary={`${level}: ${fee}%`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Exchanges;
