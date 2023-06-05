import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  cartproducts: [],
  products: [],
  callcart: 0,
  open: false,
};

const CartSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCartdata(state, action) {
      state.cartproducts = action.payload;
      // console.log(action.payload);
    },
    setacallcart(state, action) {
      state.callcart++;
    },
    setSuccessMessage(state, action) {
      state.open = true;
    },
    closeSuccessMessage(state, action) {
      state.open = false;
    },
    setCallInitial(state, action) {
      state.callcart = 0;
    },
  },
});

export const CartSliceAction = CartSlice.actions;
export default CartSlice;
