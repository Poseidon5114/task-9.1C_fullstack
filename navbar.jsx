import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (isLoggedIn) {
      setLoggedIn(false);
    } else {
      // Replace this with your actual login logic
      // alert('Login action here');
      // Assuming login is successful, set isLoggedIn to true
      setLoggedIn(true);
    }
  };

  return (
    <div className="navbar">
      <div className="company-name">DEV DEAKIN</div>
      <div className="nav-items">
        <input type="text" id="search-input" placeholder="Search" />
        <Link to="/login">
          <button id="login-button" onClick={handleLogin}>
            {isLoggedIn ? 'Sign Out' : 'Login'}
          </button>
        </Link>
        <button id="post-button">Post</button>
      </div>
    </div>
  );
}

export default Navbar;
