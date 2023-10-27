import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signOut function
import './login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false); // Updated state variable name

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // User successfully logged in. You can update state or perform other actions here.

      // Redirect to the dashboard page after successful login (updated path to /dashboard)
      setRedirectToDashboard(true);

    } catch (error) {
      setError(error.message); // Set the error message if login fails
    }
  };
  
  // If redirectToDashboard is true, redirect to the Dashboard component
  if (redirectToDashboard) {
    return <Navigate to="/dashboard
    " />; // Updated redirection path to /dashboard
  }

  return (
    <div className="container">
      <h2>
        <Link to="/signup">Sign Up</Link>
      </h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">LogIn</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;