import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductToCart } from '../../types/productToCart-types';

type CartState = {
  cartOpen: boolean;
  cartItems: any[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: CartState = {
  cartOpen: false,
  cartItems:
    typeof window !== 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems') || '')
      : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    addToCart: (state, { payload }: PayloadAction<ProductToCart>) => {
      const productToAdd: any = state.cartItems.find(
        (item: ProductToCart) => item.id === payload.id
      );
      if (productToAdd) {
        productToAdd.quantity += 1;
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  }
});

export const { openCart, closeCart, toggleCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
