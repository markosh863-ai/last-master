import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/Slice/UserSlice'; // проверь путь!

export const store = configureStore({
  reducer: {
    products: userReducer, // именно под этим именем данные будут доступны в useSelector
  },
});