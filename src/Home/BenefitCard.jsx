import React from 'react';
import './BenefitCard.css';

const BenefitCard = ({ icon, title, text }) => (
  <div className="benefit-card">
    <div className="benefit-card__icon"><img src={icon} alt="icon" /></div>
    <div className="benefit-card__info">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

export default BenefitCard;