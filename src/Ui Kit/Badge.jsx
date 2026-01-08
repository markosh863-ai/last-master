import React from 'react';
import './badge.css';

const Badge = ({ text }) => {
  return <span className="ui-badge">{text}</span>;
};

export default Badge;