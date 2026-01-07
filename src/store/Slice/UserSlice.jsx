import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Масло подсолнечное', price: '500$', img: 'maslo-2.png' },
    { id: 2, name: 'Масло Миндальное', price: '400$', img: 'maslo-1.png' },
    { id: 3, name: 'Масло Оливкове', price: '800$', img: 'maslo-3.png' },
    { id: 4, name: 'Масло Конопляное', price: '640$', img: 'maslo-4.png' },
    { id: 5, name: 'Мука Кукурузная', price: '620$', img: 'muka4.jpg' },
    { id: 6, name: 'Мука ржаная', price: '220$', img: 'muka-3.jpg' },
    { id: 7, name: 'Мука рисовая', price: '335$', img: 'muka-1.png' }, 
    { id: 8, name: 'Мука Пшенинна', price: '500$', img: 'muka2.jpg' },
  ],
  cartItems: [],
  totalAmount: 0,
};

const userSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      const priceAsNumber = Number(newItem.price.toString().replace(/[^0-9.-]+/g, ""));

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }

      state.totalAmount += priceAsNumber;
    },

    removeFromCart: (state, action) => {
  const id = action.payload;
  const existingItem = state.cartItems.find((item) => item.id === id);

  if (existingItem) {
    const priceAsNumber = Number(existingItem.price.toString().replace(/[^0-9.-]+/g, ""));

    if (existingItem.quantity > 1) {
      existingItem.quantity--;
    } else {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    }

    state.totalAmount -= priceAsNumber;
  }
},

    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = userSlice.actions;
export default userSlice.reducer;