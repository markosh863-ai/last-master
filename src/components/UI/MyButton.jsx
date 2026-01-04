import React from 'react';
import './MyButton.css';

const MyButton = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`my-btn ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;    