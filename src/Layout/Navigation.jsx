import React from 'react';
import { Link } from 'react-router-dom';

const navLinkStyle = {
  textDecoration: 'none',
  fontWeight: '700',
  color: '#274C5B',
  fontSize: '20px' // Чуть добавил размера для солидности
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav__list" style={{ listStyle: 'none', display: 'flex', gap: '30px', padding: 0 }}>
        {/* Применяем твой стиль к каждой ссылке */}
        <li><Link to="/about" style={navLinkStyle}>About</Link></li>
        <li><Link to="/shop" style={navLinkStyle}>Shop</Link></li>
        <li><Link to="/news" style={navLinkStyle}>News</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;