import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false };

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log(action.payload);
      state.isLogin = action.payload;
    },
  },
});

export const { userLogin } = authSlice.actions;
export default authSlice.reducer;
