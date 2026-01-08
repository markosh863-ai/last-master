import React from 'react';
import './ContactInfo.css';

const ContactInfo = ({ icon, title, text }) => {
  return (
    <div className="contact-info-card">
      <div className="contact-info-card__icon">
        <img src={icon} alt={title} />
      </div>
      <div className="contact-info-card__content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactInfo;