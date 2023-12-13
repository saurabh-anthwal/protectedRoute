import { createSlice } from "@reduxjs/toolkit";

const initialState = { myOrder: [] };

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
});
export default orderSlice.reducer;
