import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import Calculator from './pages/Calculator';
import Dashboard from './pages/Dashboard';
import Auth from './components/Auth'; // 새로 추가된 import

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
          <Route path="/auth" component={Auth} /> // 새로 추가된 라우트
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
