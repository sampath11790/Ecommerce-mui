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
  return async (Disptach) => {
    try {
      const data = await getdata("http://localhost/order", token, "GET");
      console.log("orders", data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const postOrder = (token) => {
  return async (Disptach) => {
    try {
      const data = await postAndDelete("http://localhost/order", token, "POST");
      console.log("postorder", data);
    } catch (error) {
      console.log("error message", error);
      // console.log(data);
    }
  };
};
