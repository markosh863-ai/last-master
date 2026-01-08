import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src="/Group.png" alt="Organick Logo" />
      <span className="logo-text">Organick</span>
    </Link>
  );
};

export default Logo;