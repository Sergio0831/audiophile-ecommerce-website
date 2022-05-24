import { createSlice } from '@reduxjs/toolkit';

type MobileNavState = {
  open: boolean;
};

const initialState: MobileNavState = {
  open: false
};

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
    close: (state) => {
      state.open = false;
    }
  }
});

export const { toggle, close } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;
