import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/Slice/UserSlice'; 
import './Catalog.css';

const Catalog = () => {
  const items = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Наш ассортимент</h2>
      <div className="products-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            
            <div className="product-card__image">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="product-card__info">
              <h3>{item.name}</h3>
              <p className="product-card__price">{item.price}</p>
              
              <div className="product-card__actions">
                <button 
                  className="buy-button"
                  onClick={() => dispatch(addToCart(item))}
                >
                  В корзину
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;