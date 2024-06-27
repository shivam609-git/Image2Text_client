import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter username and password');
      return;
    }
    try {
        const response = await fetch('https://image2text-server.vercel.app/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          // Handle successful signup
          console.log('Login  successful');
        } else {
          // Handle error in signup
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error in signup:', error);
      }
  };

  return (
    <div className="loginup">
      <h1>Login</h1>
      <form id="loginform" onSubmit={handleSubmit}>
        <input
          className="login"
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>OR</p>
      <Link to="/signup">Sign UP</Link>
    </div>
  );
};

export default LoginForm;
