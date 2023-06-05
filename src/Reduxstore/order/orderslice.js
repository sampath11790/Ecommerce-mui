import { createSlice } from "@reduxjs/toolkit";
const initialstate = { orders: [], getorder: 0 };

const OrderSlice = createSlice({
  name: "order",
  initialState: initialstate,
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
    getOrdercall(state, action) {
      state.getorder++;
    },
  },
});

export const OrderSliceAction = OrderSlice.actions;
export default OrderSlice;
