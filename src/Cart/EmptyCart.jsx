import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Ui Kit/Button';
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>Your Cart is empty</h2>
      <p>Add something to make me happy!</p>
      <Link to="/shop">
        <Button text="Return to Shop" theme="yellow" showArrow={true} />
      </Link>
    </div>
  );
};

export default EmptyCart;