import { createSlice } from '@reduxjs/toolkit';

type CheckoutModalState = {
  open: boolean;
};

const initialState: CheckoutModalState = {
  open: false
};

export const checkoutModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.open = true;
    },
    modalClose: (state) => {
      state.open = false;
    }
  }
});

export const { modalOpen, modalClose } = checkoutModalSlice.actions;
export default checkoutModalSlice.reducer;
