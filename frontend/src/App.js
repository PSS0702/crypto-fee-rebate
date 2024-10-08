import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import Calculator from './pages/Calculator';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Login from './components/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#ff9100',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/events" component={Events} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
