import React from 'react';
import Button from '../Ui Kit/Button';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero__content">
        <span className="hero__subtitle">100% Natural Food</span>
        <h1 className="hero__title">Choose the best healthier way of life</h1>
        <Button text="Explore Now" theme="yellow" showArrow={true} />
      </div>
    </div>
  </section>
);

export default Hero;