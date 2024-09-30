import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import Calculator from './pages/Calculator';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
