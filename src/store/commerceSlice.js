import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts, getProduct } from "../api/fetchProducts";
const initialState = {
  error: false,
  isLoading: false,
  products: [],
  cart: [],
  product: {},
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

export const fetchProduct = createAsyncThunk(
  "commerceSlice/fetchProduct",
  async (productId) => {
    let product;
    try {
      product = await getProduct(productId);
    } catch (err) {
      console.log(err);
    }
    return product;
  }
);

const { actions, reducer } = createSlice({
  name: "commerceSlice",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // fetchProducts fulfilled/pending/rejected
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

    // fetchProduct fulfilled/pending/rejected
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const { addItemToCart } = actions;

export const selectProducts = (state) => state.commerceSlice.products;

export default reducer;
