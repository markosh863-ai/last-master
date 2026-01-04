import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';

const Header = () => {
  // Получаем количество товаров из Redux
  const cart = useSelector(state => state.products?.cart || []);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header__flex">
        {/* Логотип — путь изменен на /images/Group.png */}
        <Link to="/" className="header__logo">
          <img 
          src="/image/Group.png" 
          alt="" 
          />
          <span>Belatea</span>
        </Link>

        {/* Навигация */}
        <nav className="header__nav">
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/contact">Контакты</NavLink>
        </nav>

        {/* Кнопка корзины */}
        <div className="header__right">
          <Link to="/cart" className="cart-btn">
            <div className="cart-icon-circle">
              {/* Иконка корзины — путь изменен на /images/cart-icon.png */}
              <img 
                src="/images/cart-icon.png" 
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