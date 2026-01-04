import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Масло подсолнечное', price: '500$', img: 'photo-23.png' },
    { id: 2, name: 'Масло льняное', price: '600$', img: 'photo-23.png' },
    { id: 3, name: 'Масло оливковое', price: '800$', img: 'photo-23.png' },
    { id: 4, name: 'Масло из семян тмина', price: '950$', img: 'photo-23.png' },

    { id: 5, name: 'Мука фермерская', price: '300$', img: 'photo-24.png' },
    { id: 6, name: 'Мука ржаная', price: '250$', img: 'photo-24.png' },
    { id: 7, name: 'Мука рисовая', price: '350$', img: 'photo-24.png' },
    { id: 8, name: 'Мука гречневая', price: '400$', img: 'photo-24.png' },
  ],
  cartItems: [],
  totalAmount: 0,
};
const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Твой код...
    },
    removeFromCart: (state, action) => {
      // Твой код...
    }
  }
});

export const { addToCart, removeFromCart } = userSlice.actions;

// ОБЯЗАТЕЛЬНО ДОБАВЬ ЭТО:
export default userSlice.reducer;