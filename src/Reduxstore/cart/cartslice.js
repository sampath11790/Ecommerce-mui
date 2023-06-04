import { createSlice } from "@reduxjs/toolkit";
const initialstate = { data: [], products: [] };

const CartSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCartdata(state, action) {
      state.data = action.payload;
    },
  },
});

export const CartSliceAction = CartSlice.actions;
export default CartSlice;
