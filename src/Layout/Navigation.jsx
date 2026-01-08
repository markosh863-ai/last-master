import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;