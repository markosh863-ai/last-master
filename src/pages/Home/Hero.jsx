import React from 'react';
import MyButton from '../../components/UI/MyButton';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <span className="hero__subtitle">100% натурально</span>
          <h1>Масла и мука из фермерского сырья</h1>
          <MyButton variant="yellow" icon="vector-4.png">
            В КАТАЛОГ
          </MyButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;