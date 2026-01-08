import React from 'react';
import Logo from '../../ui/Logo/Logo';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <Logo />
        <Navigation />
        <div className="header__cart">
           <span>Cart (0)</span>
        </div>
      </div>
    </header>
  );
};

export default Header;