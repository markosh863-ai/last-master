import React from 'react';
import './promo.css';

const Promo = () => {
  return (
    <section className="promo container">
      <div className="promo__card card-pink">
        <img src={`${import.meta.env.BASE_URL}photo-1.png`} alt="promo" />
        <div className="promo__text">
          <span>Natural!!</span>
          <h2>Get Garden Fresh Fruits</h2>
        </div>
      </div>
      <div className="promo__card card-green">
        <img src={`${import.meta.env.BASE_URL}photo-2.png`} alt="promo" />
        <div className="promo__text">
          <span>Offer!!</span>
          <h2>Get 20% off on Vegetables</h2>
        </div>
      </div>
    </section>
  );
};

export default Promo;