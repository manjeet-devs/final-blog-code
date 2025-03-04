import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';

export const adminStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});