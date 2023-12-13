import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import cartSlice from "./features/cartSlice";
import orderSlice from "./features/orderSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    order: orderSlice,
    isAuth: authSlice,
  },
});
