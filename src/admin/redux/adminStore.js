import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import categoryReducer from "./slice/categorySlice";

export const adminStore = configureStore({
  reducer: {
    category: categoryReducer
  },
});