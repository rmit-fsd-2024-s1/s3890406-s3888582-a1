import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/specialDeals">Special Deals!</Link></li>
        <li><Link to="/Signup">Sign Up</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Review">Leave a Review</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;