import React from 'react';
import './icon.css';

const Icon = ({ name, className }) => {
  return (
    <span className={`ui-icon ${className}`}>
      <img src={`/icons/${name}.svg`} alt={name} />
    </span>
  );
};
export default Icon;