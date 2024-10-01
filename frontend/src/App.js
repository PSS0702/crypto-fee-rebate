import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import Calculator from './pages/Calculator';
import Dashboard from './pages/Dashboard';

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
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
