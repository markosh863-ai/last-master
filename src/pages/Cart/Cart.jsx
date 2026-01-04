import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/Slice/UserSlice';
import MyButton from '../../components/UI/MyButton'; // Проверь этот путь!
import './cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  // Достаем cartItems, как ты и называл в слайсе
  const cartItems = useSelector(state => state.products.cartItems || []);
  const totalAmount = useSelector(state => state.products.totalAmount || 0);

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Корзина</h1>
        {cartItems.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <div className="cart-content">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img
                  src={window.location.origin + '/' + item.img}
                  alt={item.name}
                  style={{ width: '100px', height: 'auto', objectFit: 'contain' }}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price} {item.quantity}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
              </div>
            ))}
            <h2>Итого: {totalAmount}$</h2>
            <MyButton variant="yellow">Оформить</MyButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;