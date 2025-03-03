
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import authReducer from "./slice/authSlice";
import articleReducer from "./slice/articleSlice";

export const frontStore = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    articles:articleReducer
  },
});