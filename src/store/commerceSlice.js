import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  error: false,
  isLoading: false,
  cart: [],
};

const { actions, reducer } = createSlice({
  name: "commerceSlice",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addItemToCart } = actions;

export default reducer;
