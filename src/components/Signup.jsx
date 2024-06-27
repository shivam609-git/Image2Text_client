import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful');
      } else {
        // Handle error in signup
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error in signup:', error);
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form action="POST" id="signform" onSubmit={submit}>
        <input
          type="email"
          className="sign_input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="sign_input"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" className="button-62" value="Signup" />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/login">Login Page</Link>
    </div>
  );
};

export default Signup;
