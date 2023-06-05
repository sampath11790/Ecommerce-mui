import { CartSliceAction } from "../cart/cartslice";
import { AuthSliceAction } from "./Authslice";

//signup
export const Signup = (obj) => {
  return async (Disptach) => {
    const signupreq = async () => {
      const response = await fetch(`http://3.83.25.221:3000/user/signup`, {
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
      alert(" successfully registered your account ");
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
      const response = await fetch(` http://3.83.25.221:3000/user/login`, {
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
      Dispatch(AuthSliceAction.login());
      Dispatch(AuthSliceAction.setAuth({ login: "true", token: user.Token }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
