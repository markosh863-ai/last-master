import React from 'react';
import Button from '../../Ui Kit/Button';
import './SubscribeBanner.css';

const SubscribeBanner = () => (
  <section className="subscribe">
    <div className="container subscribe__wrapper">
      <h2 className="subscribe__title">Subscribe to our Newsletter</h2>
      <form className="subscribe__form">
        <input type="email" placeholder="Your Email Address" className="ui-input" />
        <Button text="Subscribe" theme="dark" />
      </form>
    </div>
  </section>
);

export default SubscribeBanner;