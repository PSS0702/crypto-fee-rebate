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
    <div className="container">
      <h2>Supported Exchanges</h2>
      <div className="exchange-list">
        {exchanges.map((exchange) => (
          <div key={exchange._id} className="exchange-item">
            <h3>{exchange.name}</h3>
            <p>URL: <a href={exchange.url} target="_blank" rel="noopener noreferrer">{exchange.url}</a></p>
            <h4>Fee Structure:</h4>
            <ul>
              {Object.entries(exchange.feeStructure).map(([level, fee]) => (
                <li key={level}>{level}: {fee}%</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exchanges;
