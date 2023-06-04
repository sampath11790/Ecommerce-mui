import { AuthSliceAction } from "./Authslice";

//signup
export const Signup = (obj) => {
  return async (Disptach) => {
    const signupreq = async () => {
      const response = await fetch(`http://localhost:3000/user/signup/`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          //   Authorization: token,
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error();
      }

      return data;
    };
    try {
      const data = await signupreq();

      console.log(data);
      Disptach(AuthSliceAction.login());
    } catch (error) {
      console.log(error.message);
    }
  };
};

//login
export const Login = (obj) => {
  return async (Dispatch) => {
    const loginreq = async () => {
      const response = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          //   Authorization: token,
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error();
      }

      return data;
    };
    try {
      const user = await loginreq();
      alert("login success");
      localStorage.setItem("token", user.Token);
      localStorage.setItem("login", true);
      // Disptach(AuthSliceAction.login());
      Dispatch(AuthSliceAction.setAuth({ login: "true", token: user.Token }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
