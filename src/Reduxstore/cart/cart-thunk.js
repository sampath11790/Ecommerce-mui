import { CartSliceAction } from "./cartslice";

const getdata = async (url, token, method) => {
  const response = await fetch(url, {
    method: method,

    headers: {
      "Content-Type": "application/json",
      Authorization: token ? token : "empty",
    },
  });

  const data = await response.json();

  if (data.error) {
    //   console.log(data);
    throw new Error(data);
  }

  return data;
};

const postAndDelete = async (url, obj, token, method) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(obj),
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
export const getallProducts = () => {
  return async (Dispatch) => {
    try {
      //   const data = await getProduct_req();
      const data = await getdata(
        "http://localhost:3000/Admin/porduct",
        null,
        "GET"
      );

      Dispatch(CartSliceAction.setProducts(data));
      // Dispatch(CartSliceAction.setacallcart());
    } catch (error) {
      // console.log("error message");
      // console.log(data);
    }
  };
};

export const getCart = (token) => {
  return async (Dispatch) => {
    try {
      //   const data = await getcartReq();
      const data = await getdata("http://localhost:3000/cart", token, "GET");
      // console.log("data", data);

      Dispatch(CartSliceAction.setCartdata(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postCart = (id, token) => {
  return async (Dispatch) => {
    try {
      //   const data = await postcartReq();
      const data = await postAndDelete(
        "http://localhost:3000/cart",
        { id: id },
        token,
        "POST"
      );
      // console.log("data", data);
      Dispatch(CartSliceAction.setacallcart());
    } catch (error) {
      console.log(error);
      // console.log(data);
    }
  };
};

export const deleteCart = (id, token) => {
  return async (Dispatch) => {
    try {
      //   const data = await deletecartReq();
      const data = await postAndDelete(
        "http://localhost:3000/cart",
        { id: id },
        token,
        "DELETE"
      );
      // console.log("data", data);
      Dispatch(CartSliceAction.setacallcart());
    } catch (error) {
      // console.log("error message");
      // console.log(data);
    }
  };
};
