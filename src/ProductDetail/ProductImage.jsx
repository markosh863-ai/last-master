import React from 'react';
import Badge from '../../Ui Kit/Badge';
import './ProductImage.css';

const ProductImage = ({ image, category }) => {
  return (
    <div className="product-detail__image-box">
      <div className="product-detail__badge">
        <Badge text={category} />
      </div>
      <img src={image} alt="Product" className="product-detail__img" />
    </div>
  );
};

export default ProductImage;