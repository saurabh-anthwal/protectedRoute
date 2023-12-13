import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/productService";

const initialState = { products: [], isLoading: false };

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.isLoading = false;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const getProducts = createAsyncThunk("getProducts", async () => {
  return getAllProducts();
});

export default productSlice.reducer;
