import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  cartproducts: [],
  products: [],
  callcart: 0,
  open: false,
  totalcartitem: 0,
  totalamount: 0,
  addcart_btn_Data: {},
};

const CartSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCartdata(state, action) {
      // state.cartproducts = action.payload;
      let cartitem = 0;
      let amount = 0;
      let cart_btn_Data = {};
      const cartdata = action.payload.reduce((acc, cur) => {
        cart_btn_Data[cur.id] = cur.cartitem.TotalQty;
        amount += cur.price * cur.cartitem.TotalQty;
        cartitem += cur.cartitem.TotalQty;
        acc.push({
          id: cur.id,
          imageUrl: cur.imageUrl[0],
          title: cur.title,
          price: cur.price,
          TotalQty: cur.cartitem.TotalQty,
        });
        return acc;
      }, []);

      state.cartproducts = cartdata;
      state.totalamount = amount;
      state.totalcartitem = cartitem;
      state.addcart_btn_Data = cart_btn_Data;

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
