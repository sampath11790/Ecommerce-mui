import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./auth/Authslice";

const Store = configureStore({
  reducer: {
    auth: AuthenticationSlice.reducer,
  },
});
export default Store;
