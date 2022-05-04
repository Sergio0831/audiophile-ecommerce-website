import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from '../features/mobileNav/mobileNavSlice';
import cartReducer from '../features/cart/cartSlice';
import checkoutModalReducer from '../features/checkout/checkoutModalSlice';

export const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
    cart: cartReducer,
    modal: checkoutModalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
