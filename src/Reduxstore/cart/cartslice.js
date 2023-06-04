import { createSlice } from "@reduxjs/toolkit";
const initialstate = { cartproducts: [], products: [], callcart: 0 };

const CartSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCartdata(state, action) {
      state.cartproducts = action.payload;
      console.log(action.payload);
    },
    setacallcart(state, action) {
      state.callcart++;
    },
  },
});

export const CartSliceAction = CartSlice.actions;
export default CartSlice;
