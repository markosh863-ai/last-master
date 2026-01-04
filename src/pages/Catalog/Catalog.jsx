import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './catalog.css';

const Catalog = () => {
  const products = useSelector(state => state.products.items || []);

  return (
    <div className="catalog-page">
      <div className="container">
        <h1 className="catalog-title">Наш ассортимент</h1>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="catalog-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                {/* Картинки берем из public */}
                <img src={product.img} alt={product.name} style={{ width: '100%', marginBottom: '15px' }} />
                <h3 style={{ color: '#274C5B' }}>{product.name}</h3>
                <p style={{ fontWeight: 'bold', margin: '10px 0' }}>{product.price} ₽</p>
                <Link to={`/product/${product.id}`} style={{ color: '#7EB12D', textDecoration: 'none', fontWeight: 'bold' }}>
                  Подробнее
                </Link>
              </div>
            ))
          ) : (
            <p>Загрузка товаров...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;