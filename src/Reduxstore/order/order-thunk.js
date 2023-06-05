import { CartSliceAction } from "../cart/cartslice";
import { OrderSliceAction } from "./orderslice";

const getdata = async (url, token, method) => {
  const response = await fetch(url, {
    method: method,

    headers: {
      "Content-Type": "application/json",
      Authorization: token ? token : "",
    },
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data);
  }
  return data;
};

const postAndDelete = async (url, token, method) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();

  if (data.error) {
    //   console.log(data);
    throw new Error(data);
  }

  return data;
};

export const getOrder = (token) => {
  return async (Dispatch) => {
    try {
      const data = await getdata("//3.83.25.221:3000/order", token, "GET");
      console.log("get orders", data);
      Dispatch(OrderSliceAction.setOrders(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postOrder = (token) => {
  return async (Dispatch) => {
    try {
      const data = await postAndDelete(
        "//3.83.25.221:3000/order",
        token,
        "POST"
      );
      console.log("postorder", data);
      Dispatch(OrderSliceAction.getOrdercall());
      Dispatch(CartSliceAction.setCartdata([]));
    } catch (error) {
      console.log("error message", error);
      // console.log(data);
    }
  };
};
