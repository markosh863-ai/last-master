import React from 'react';
import './CartItem.css';

const CartItem = ({ id, name, price, oldPrice, image, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item__details">
        <h4 className="cart-item__name">{name}</h4>
        <div className="cart-item__prices">
          <span className="old-price">${oldPrice}.00</span>
          <span className="current-price">${price}.00</span>
        </div>
      </div>
      <div className="cart-item__quantity">
        <span>Quantity :</span>
        <input type="number" defaultValue={quantity} min="1" className="ui-input" />
      </div>
      <button className="cart-item__remove">×</button>
    </div>
  );
};

export default CartItem;