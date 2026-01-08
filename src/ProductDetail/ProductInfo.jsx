import React from 'react';
import Button from '../../Ui Kit/Button';
import './ProductInfo.css';

const ProductInfo = ({ name, price, oldPrice, rating, description }) => {
  return (
    <div className="product-info">
      <h1 className="product-info__title">{name}</h1>
      <div className="product-info__rating">{"★".repeat(rating)}</div>
      <div className="product-info__price">
        <span className="old-price">${oldPrice}.00</span>
        <span className="current-price">${price}.00</span>
      </div>
      <p className="product-info__desc">{description}</p>
      
      <div className="product-info__action">
        <div className="quantity-input">
          <span>Quantity :</span>
          <input type="number" defaultValue="1" min="1" />
        </div>
        <Button text="Add To Cart" theme="dark" showArrow={true} />
      </div>
    </div>
  );
};

export default ProductInfo;