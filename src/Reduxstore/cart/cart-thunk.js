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
  return async (Disptach) => {
    // const getProduct_req = async () => {
    //   const response = await fetch(`http://localhost/admin/product`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Authorization: token,
    //     },
    //   });
    //   const data = await response.json();

    //   if (data.error) {
    //     console.log(data);
    //     throw new Error("faild");
    //   }

    //   return data;
    // };
    try {
      //   const data = await getProduct_req();
      const data = await getdata("http://localhost/admin/product", null, "GET");
      console.log("data", data);
    } catch (error) {
      // console.log("error message");
      // console.log(data);
    }
  };
};

export const getCart = (token) => {
  return async (Disptach) => {
    // const getcartReq = async () => {
    //   const response = await fetch(`http://localhost/cart`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     },
    //   });
    //   const data = await response.json();

    //   if (data.error) {
    //     console.log(data);
    //     throw new Error("faild");
    //   }

    //   return data;
    // };
    try {
      //   const data = await getcartReq();
      const data = await getdata("http://localhost/cart", token, "GET");
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const postCart = (id, token) => {
  return async (Disptach) => {
    // const postcartReq = async () => {
    //   const response = await fetch(`http://localhost/cart`, {
    //     method: "POST",
    //     body: JSON.stringify({ id: id }),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     },
    //   });
    //   const data = await response.json();

    //   if (data.error) {
    //     console.log(data);
    //     throw new Error("faild");
    //   }

    //   return data;
    // };
    try {
      //   const data = await postcartReq();
      const data = await postAndDelete(
        "http://localhost/cart",
        { id: id },
        token,
        "POST"
      );
      console.log("data", data);
    } catch (error) {
      // console.log("error message");
      // console.log(data);
    }
  };
};

export const deleteCart = (id, token) => {
  return async (Disptach) => {
    // const deletecartReq = async () => {
    //   const response = await fetch(`http://localhost/cart`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     },
    //   });
    //   const data = await response.json();

    //   if (data.error) {
    //     console.log(data);
    //     throw new Error("faild");
    //   }

    //   return data;
    // };
    try {
      //   const data = await deletecartReq();
      const data = await postAndDelete(
        "http://localhost/cart",
        { id: id },
        token,
        "DELETE"
      );
      console.log("data", data);
    } catch (error) {
      // console.log("error message");
      // console.log(data);
    }
  };
};
