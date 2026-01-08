import React from 'react';
import './iput.css'; // Ты назвал файл iput.css на скрине, используем так

const Input = ({ placeholder }) => {
  return <input className="ui-input" type="text" placeholder={placeholder} />;
};

export default Input;