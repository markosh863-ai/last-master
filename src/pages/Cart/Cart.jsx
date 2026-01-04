import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementQuantity } from '../../store';
import './cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.products.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Корзина</h1>
      {cartItems.length === 0 ? <p>Ваша корзина пуста</p> : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - {item.price} руб.</span>
            <div className="quantity-controls">
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart; 