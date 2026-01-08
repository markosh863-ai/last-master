import React from 'react';
import './OfferCard.css';

const OfferCard = ({ title, subtitle, theme }) => (
  <div className={`offer-card ${theme}`}>
    <span className="offer-card__sub">{subtitle}</span>
    <h3 className="offer-card__title">{title}</h3>
  </div>
);

export default OfferCard;