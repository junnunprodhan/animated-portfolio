import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {
    email: null,
  },
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const email = action.payload.email;
      state.user.email = email;
    },
    logOutUser: (state) => {
      state.user.email = null;
    },
  },
});

export const { setUser,logOutUser } = authSlice.actions;

export const currentUser = (state) => state.auth.user.email;

export default authSlice.reducer;
