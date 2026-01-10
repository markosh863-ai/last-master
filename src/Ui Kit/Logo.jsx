import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div className="header-elements">
      <Link to="/" className="logo">
        <img src="/Group.png" alt="Bebalea" />
        <span>Bebalea</span>
      </Link>

      <Link to="/" className="Search">
        <div className="search-circle">
           <img src="/Vector (5).png" alt="Search" />
        </div>
      </Link>

      <Link to="/cart" className="Cart">
        <div className="cart-circle">
           <img src="/cart-icon.png" alt="Cart" />
        </div>
        <span className="cart-count">Cart (0)</span>
      </Link>
    </div>
  );
};

export default Logo;