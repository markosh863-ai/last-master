import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../store/Slice/UserSlice';
import './cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.products.cartItems || []);
  const totalAmount = useSelector(state => state.products.totalAmount || 0);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      alert(`Заказ на сумму ${totalAmount.toLocaleString()}$ принят!`);
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Корзина</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Ваша корзина пуста</p>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item__img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  
                  <div className="cart-item__info">
                    <h3>{item.name}</h3>
                    <p className="price-per-unit">{item.price}</p>
                  </div>

                  <div className="cart-item__controls">
                    <button className="control-btn" onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                    <span className="quantity-num">{item.quantity}</span>
                    <button className="control-btn" onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="total-info">
                <h2>Итого к оплате:</h2>
                <span className="total-price">{totalAmount.toLocaleString()}$</span>
              </div>
              
              <div className="cart-actions">
                <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
                  Очистить корзину
                </button>
                
                <button className="checkout-btn" onClick={handleCheckout}>
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;