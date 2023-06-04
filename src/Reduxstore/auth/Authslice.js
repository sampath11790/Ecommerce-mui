import { createSlice } from "@reduxjs/toolkit";
const initialstate = { login: false };

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    login(state, action) {
      state.login = true;
    },
  },
});

export const AuthSliceAction = AuthenticationSlice.actions;
export default AuthenticationSlice;
