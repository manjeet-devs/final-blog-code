
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export const frontStore = configureStore({
  reducer: {
    counter: counterReducer, // Add your slices here
  },
});