import React from 'react';
import { productsData } from '../../Data/Data'; 
import { Link } from 'react-router-dom';
import MyButton from '../../components/UI/MyButton'; // Импортируем твою крутую кнопку
import './catalog.css';

const Catalog = () => {
  return (
    <div className="catalog-page">
      {/* Баннер страницы */}
      <section className="catalog-header">
        <div className="catalog-container">
          <span className="section-subtitle">Organic Only</span>
          <h1 className="section-title">Каталог</h1>
        </div>
      </section>

      <section className="catalog-products">
        <div className="catalog-container">
          <div className="products-grid">
            {productsData.map((product) => (
              <div key={product.id} className="product-card">
                {/* Ссылка теперь только на картинку и название, чтобы кнопка работала отдельно */}
                <Link to={`/product/${product.id}`} className="product-link">
                  <div className="product-tag">{product.tag}</div>

                  <div className="product-img-wrapper">
                    {/* Путь настроен на public/images/ */}
                    <img
                      src={`/images/${product.img}`}
                      alt={product.name}
                      className="product-main-img"
                    />
                  </div>

                  <div className="product-info">
                    <h4 className="product-name">{product.name}</h4>
                  </div>
                </Link>

                {/* Нижняя часть с ценой и твоей кнопкой MyButton */}
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <MyButton variant="primary">
                    <img 
                      src="/images/cart-icon.png" 
                      alt="cart" 
                      style={{ width: '18px', filter: 'brightness(0) invert(1)' }} 
                    />
                  </MyButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;