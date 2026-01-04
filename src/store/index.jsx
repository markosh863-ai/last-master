import { configureStore, createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    // ВАЖНО: Названия должны точно совпадать с файлами в public/images/
    items: [
      { 
        id: 1, 
        name: 'Масло тыквенное', 
        price: 800, 
        category: 'Масло', 
        img: 'image 15.png', // Поправил название под структуру папки
        tag: 'Vegetable'
      },
      { 
        id: 2, 
        name: 'Масло кунжутное', 
        price: 750, 
        category: 'Масло', 
        img: 'image 14.png', 
        tag: 'Organic'
      },
      { 
        id: 3, 
        name: 'Мука рисовая', 
        price: 300, 
        category: 'Мука', 
        img: 'image 13 (1).png', 
        tag: 'Milo'
      }
    ],
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        // Добавляем товар в корзину, сохраняя путь к картинке
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        // Если количество 1 и жмем минус — удаляем из корзины
        state.cart = state.cart.filter(i => i.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    }
  }
});

// Экспортируем экшены
export const { addToCart, removeFromCart, decrementQuantity, clearCart } = productSlice.actions;

// Экспортируем стор
export const store = configureStore({
  reducer: { 
    products: productSlice.reducer 
  }
});