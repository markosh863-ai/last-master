import React from 'react';
import './input.css'; 

const Input = ({ placeholder }) => {
  return <input className="ui-input" type="text" placeholder={placeholder} />;
};

export default Input;