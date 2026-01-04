import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../../Data/Data'; 
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    // Ищем товар по ID
    const product = productsData.find(item => item.id === parseInt(id));

    // Скролл вверх при переходе
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="container" style={{padding: '100px 0', textAlign: 'center'}}>
                <h2>Товар не найден, бро!</h2>
            </div>
        );
    }

    return (
        <div className="product-page">
            <div className="container">
                <div className="product-flex">

                    {/* Левая колонка: Фото товара */}
                    <div className="product-image-block">
                        <div className="image-card">
                            <span className="type-tag">{product.tag}</span>
                            {/* Исправленный путь к картинке */}
                            <img
                                src={`/images/${product.img}`}
                                alt={product.name}
                            />
                        </div>
                    </div>

                    {/* Правая колонка: Детали и кнопки */}
                    <div className="product-info-block">
                        <h1 className="title">{product.name}</h1>
                        <div className="stars" style={{color: '#FFA800', marginBottom: '10px'}}>
                            ⭐⭐⭐⭐⭐ (5.0)
                        </div>
                        <div className="price-tag">{product.price}</div>

                        <p className="description">{product.description}</p>

                        <div className="specs" style={{marginBottom: '30px', color: '#274C5B'}}>
                            <p style={{marginBottom: '10px'}}><strong>Категория:</strong> {product.tag}</p>
                            <p><strong>Объем/Вес:</strong> {product.weight || '250 мл'}</p>
                        </div>

                        {/* Кнопки на маркетплейсы */}
                        <div className="buy-buttons">
                            {product.wb && (
                                <a href={product.wb} target="_blank" rel="noreferrer" className="wb-link">
                                    Заказать на Wildberries
                                </a>
                            )}
                            {product.ozon && (
                                <a href={product.ozon} target="_blank" rel="noreferrer" className="ozon-link">
                                    Заказать на OZON
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;