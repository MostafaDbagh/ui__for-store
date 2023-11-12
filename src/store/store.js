import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/reducer/productReducer';
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});