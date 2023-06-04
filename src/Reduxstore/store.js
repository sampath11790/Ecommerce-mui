import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./auth/Authslice";
import CartSlice from "./cart/cartslice";
import OrderSlice from "./order/orderslice";

const Store = configureStore({
  reducer: {
    auth: AuthenticationSlice.reducer,
    cart: CartSlice.reducer,
    order: OrderSlice.reducer,
  },
});
export default Store;
