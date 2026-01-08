import React from 'react';
import './button.css';

const Button = ({ children, variant = 'dark', onClick }) => {
  return (
    <button className={`ui-btn ${variant}`} onClick={onClick}>
      {children}
      <span className="btn-arrow">→</span>
    </button>
  );
};

export default Button;