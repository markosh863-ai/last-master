import React from 'react';
import Badge from '../Ui Kit/Badge'; // Проверь путь к Ui Kit
import './ProductCard.css';

const ProductCard = ({ category, name, price, oldPrice, image, rating }) => {
  return (
    <div className="product-card">
      <div className="product-card__badge">
        <Badge text={category} />
      </div>
      <div className="product-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="product-card__info">
        <h4 className="product-card__name">{name}</h4>
        <div className="product-card__footer">
          <div className="product-card__prices">
            <span className="old-price">${oldPrice}.00</span>
            <span className="current-price">${price}.00</span>
          </div>
          <div className="product-card__rating">
            {"★".repeat(rating)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;