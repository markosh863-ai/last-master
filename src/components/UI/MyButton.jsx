import React from 'react';
import './MyButton.css';

const MyButton = ({ children, variant, icon, ...props }) => {
  return (
    <button className={`my-button ${variant}`} {...props}>
      {children}
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="button-icon"
          style={{ marginLeft: '10px', width: '18px' }}
        />
      )}
    </button>
  );
};

export default MyButton;