import React, { useState, useEffect } from 'react';
import { getExchanges, calculateRebate } from '../services/api';

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

  return (
    <div className="container">
      <h2>Rebate Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exchange">Select Exchange:</label>
          <select
            id="exchange"
            value={selectedExchange}
            onChange={(e) => setSelectedExchange(e.target.value)}
            required
          >
            <option value="">Choose an exchange</option>
            {exchanges.map((exchange) => (
              <option key={exchange._id} value={exchange._id}>{exchange.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="volume">Trade Volume (USD):</label>
          <input
            id="volume"
            type="number"
            value={tradeVolume}
            onChange={(e) => setTradeVolume(e.target.value)}
            required
            min="0"
          />
        </div>
        <button type="submit" disabled={loading}>Calculate Rebate</button>
      </form>
      {loading && <p>Calculating...</p>}
      {error && <p className="error">{error}</p>}
      {rebate !== null && (
        <div className="result">
          <h3>Estimated Rebate:</h3>
          <p>${rebate.toFixed(2)} USD</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
