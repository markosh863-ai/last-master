import React from 'react';
import './ProductCard.css';

const ProductCard = ({ category, name, oldPrice, price, image, rating }) => {
  return (
    <div className="product-card">
      <div className="product-card__tag">{category}</div>
      <div className="product-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="product-card__info">
        <h4 className="product-card__name">{name}</h4>
        <div className="product-card__footer">
          <div className="product-card__prices">
            <span className="product-card__old-price">${oldPrice}</span>
            <span className="product-card__price">${price}</span>
          </div>
          <div className="product-card__rating">
            {/* Тут можно вставить иконку звезды */}
            {"⭐".repeat(rating)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;