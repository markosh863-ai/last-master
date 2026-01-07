import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/Slice/UserSlice'; 

export const store = configureStore({
  reducer: {
    products: userReducer, 
  },
});