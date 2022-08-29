import { configureStore } from '@reduxjs/toolkit'
import pizzas from '../pages/pizzasSlice';

export const store = configureStore({
  reducer: {pizzas},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production', 
})