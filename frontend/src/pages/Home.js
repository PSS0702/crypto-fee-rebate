import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Crypto Fee Rebate</h1>
      <p>Find the best rebates for your crypto trades!</p>
      <div className="features">
        <div className="feature">
          <h3>Compare Exchanges</h3>
          <p>View and compare fee structures across multiple exchanges.</p>
          <Link to="/exchanges">View Exchanges</Link>
        </div>
        <div className="feature">
          <h3>Calculate Rebates</h3>
          <p>Use our calculator to estimate your potential rebates.</p>
          <Link to="/calculator">Use Calculator</Link>
        </div>
        <div className="feature">
          <h3>Track Your Savings</h3>
          <p>Sign up to track your rebates and maximize your savings.</p>
          <Link to="/auth">Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
