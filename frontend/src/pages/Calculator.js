import React, { useState } from 'react';
import { calculateRebate } from '../services/api';

function Calculator() {
  const [amount, setAmount] = useState('');
  const [exchange, setExchange] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await calculateRebate({ amount, exchange });
      setResult(data.rebate);
    } catch (error) {
      console.error('Error calculating rebate:', error);
    }
  };

  return (
    <div>
      <h2>Rebate Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
        <input
          type="text"
          value={exchange}
          onChange={(e) => setExchange(e.target.value)}
          placeholder="Enter exchange name"
          required
        />
        <button type="submit">Calculate Rebate</button>
      </form>
      {result !== null && <p>Estimated rebate: ${result}</p>}
    </div>
  );
}

export default Calculator;
