import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from '../features/mobileNav/mobileNavSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
