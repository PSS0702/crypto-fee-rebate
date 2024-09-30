import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Typography, Container, Tabs, Tab } from '@material-ui/core';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login({ email, password });
      } else {
        await register({ username, email, password });
      }
      history.push('/dashboard');
    } catch (error) {
      console.error('Auth error:', error);
      // TODO: Show error message to user
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        {isLogin ? 'Login' : 'Register'}
      </Typography>
      <Tabs
        value={isLogin ? 0 : 1}
        onChange={(e, newValue) => setIsLogin(newValue === 0)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
        >
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </form>
    </Container>
  );
}

export default Auth;
