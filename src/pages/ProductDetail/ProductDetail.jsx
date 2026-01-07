import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/Slice/UserSlice';
import MyButton from '../../components/UI/MyButton.jsx';
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const product = useSelector(state => 
    state.products.items.find(item => item.id === parseInt(id))
  );

  if (!product) return <div className="container">Товар не найден</div>;

  return (
    <div className="product-detail">
      <div className="container product-detail__flex">
        <div className="product-detail__image-block">
          <img src={`/${product.img}`} alt={product.name} />
        </div>
        
        <div className="product-detail__info">
          <h1>{product.name}</h1>
          <p className="product-detail__price">{product.price}</p>
          
          <div className="product-detail__action">
            <MyButton 
              variant="yellow" 
              onClick={() => dispatch(addToCart(product))}
            >
              В корзину
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
