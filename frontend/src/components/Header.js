import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/exchanges">Exchanges</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/auth">Login/Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
