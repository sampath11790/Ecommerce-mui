import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./auth/Authslice";
import CartSlice from "./cart/cartslice";

const Store = configureStore({
  reducer: {
    auth: AuthenticationSlice.reducer,
    cart: CartSlice.reducer,
  },
});
export default Store;
