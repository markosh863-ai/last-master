import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

// Твои импорты из public (Vite позволяет так делать, если настроено, 
// но если выдаст ошибку - просто замени пути на '/Group.png' и т.д.)
import logoImg from '../../public/Group.png'; 
import SearchImg from '../../public/Vector (5).png';
import CartImg from '../../public/cart-icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          
          {/* ЛОГОТИП */}
          <Link to="/" className="logo">
            <img src={logoImg} alt="Bebalea" />
            <span>Bebalea</span>
          </Link>

          {/* НАВИГАЦИЯ */}
          <Navigation />

          {/* ЭКШЕНЫ (ПОИСК И КОРЗИНА) */}
          <div className="header__actions">
            
            {/* ПОИСК */}
            <div className="search-container">
              <input type="text" className="search-input" placeholder="Search..." />
              <button className="search-btn">
                <img src={SearchImg} alt="Search" />
              </button>
            </div>

            {/* КОРЗИНА */}
            <Link to="/cart" className="cart-btn">
              <div className="cart-icon">
                <img src={CartImg} alt="Cart" />
              </div>
              <span className="cart-text">Cart (0)</span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;