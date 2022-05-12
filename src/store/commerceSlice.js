import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/fetchProducts";
const initialState = {
  error: false,
  isLoading: false,
  products: [],
  cart: {},
  quantity: 1,
};

export const fetchProducts = createAsyncThunk(
  "commerceSlice/fetchProducts",
  async () => {
    let products;
    try {
      products = await getProducts();
    } catch (err) {
      console.log(err);
    }
    return products;
  }
);

const { actions, reducer } = createSlice({
  name: "commerceSlice",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart[action.payload.id] = {
        ...action.payload,
        quantity: state.quantity,
      };
    },
    setQuantity: (state, action) => {
      state.quantity = parseInt(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.cart[action.payload] = {};
      delete state.cart[action.payload];
    },
    clearState: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // fetchProducts lifecycle
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const {
  addProductToCart,
  setQuantity,
  removeProductFromCart,
  clearState,
} = actions;

export const selectProducts = (state) => state.commerceSlice.products;
export const selectQuantity = (state) => state.commerceSlice.quantity;
export const selectCart = (state) => state.commerceSlice.cart;
export default reducer;
