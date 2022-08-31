import { configureStore } from '@reduxjs/toolkit'
import pizzas from '../pages/pizzasSlice';
import buscet from '../pages/buscetSlice';

export const store = configureStore({
  reducer: {pizzas, buscet},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production', 
})