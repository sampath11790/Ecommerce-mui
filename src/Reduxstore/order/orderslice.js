import { createSlice } from "@reduxjs/toolkit";
const initialstate = { orders: [] };

const OrderSlice = createSlice({
  name: "order",
  initialState: initialstate,
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
  },
});

export const OrderSliceAction = OrderSlice.actions;
export default OrderSlice;
