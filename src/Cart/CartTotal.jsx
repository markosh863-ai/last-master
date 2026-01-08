import React from 'react';
import Button from '../../Ui Kit/Button';
import './CartTotal.css';

const CartTotal = ({ total, discount }) => {
  return (
    <div className="cart-total">
      <div className="cart-total__row">
        <span>Cost Total</span>
        <span>${total}.00</span>
      </div>
      <div className="cart-total__row">
        <span>Discount</span>
        <span>${discount}.00</span>
      </div>
      <div className="cart-total__row total">
        <span>Total</span>
        <span>${total - discount}.00</span>
      </div>
      <Button text="Confirm Order" theme="dark" showArrow={true} />
    </div>
  );
};

export default CartTotal;