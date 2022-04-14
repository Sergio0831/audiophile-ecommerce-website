import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from '../features/mobileNav/mobileNavSlice';

export const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
