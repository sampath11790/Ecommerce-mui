import { createSlice } from "@reduxjs/toolkit";
const initialstate = { login: null, token: null };

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    login(state, action) {
      state.login = true;
    },
    setAuth(state, action) {
      state.login = action.payload.login;
      state.token = action.payload.token;
      // console.log(action.payload);
    },
  },
});

export const AuthSliceAction = AuthenticationSlice.actions;
export default AuthenticationSlice;
