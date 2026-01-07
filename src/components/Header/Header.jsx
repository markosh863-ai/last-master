import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';

const Header = () => {
const cart = useSelector(state => state.products?.cartItems || []);
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header__flex">
        <Link to="/" className="header__logo">
          <img 
            src={`${import.meta.env.BASE_URL}Group.png`} 
            alt="Belatea" 
          />
          <span>Belatea</span>
        </Link>

        <nav className="header__nav">
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/contact">Контакты</NavLink>
        </nav>

        <div className="header__right">
          <Link to="/cart" className="cart-btn">
            <div className="cart-icon-circle">
              <img 
                src={`${import.meta.env.BASE_URL}cart-icon.png`} 
                alt="cart" 
              />
            </div>
            <span className="cart-text">Корзина ({totalItems})</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;