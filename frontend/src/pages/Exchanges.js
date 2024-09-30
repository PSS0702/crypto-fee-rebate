import React, { useState, useEffect } from 'react';
import { getExchanges } from '../services/api';

function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExchanges();
  }, []);

  const fetchExchanges = async () => {
    try {
      const data = await getExchanges();
      setExchanges(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch exchanges');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Supported Exchanges</h2>
      <ul>
        {exchanges.map((exchange) => (
          <li key={exchange._id}>{exchange.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exchanges;
