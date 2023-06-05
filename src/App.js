import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import NavigationBar from "./component/Navigation/NavigationBar";
import ContactUs from "./component/ContactUs/contactus";
import Home from "./component/Home/Home";
import SignIn from "./component/Loginpage/login";
import Store from "./component/Store/Store";
import StoreItem from "./component/Store/StoreItem";
import OrdersPage from "./component/Orders/Orders";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceAction } from "./Reduxstore/auth/Authslice";
import React, { useEffect } from "react";
import AlertBox from "./component/SupportPages/alert";
import { getCart, getallProducts } from "./Reduxstore/cart/cart-thunk";

function App() {
  const Dispatch = useDispatch();
  // const { loginsuccess } = useSelector((state) => state.auth);
  const { login, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("login");
    Dispatch(AuthSliceAction.setAuth({ login: login, token: token }));
    Dispatch(getallProducts());
  }, []);
  useEffect(() => {
    if (login == "true") {
      console.log("calling cart inital");
      Dispatch(getCart(token));
      return;
    }
  }, [login]);
  return (
    <div className="App">
      <div>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/About" element={<About />} />

          <Route path="contactus" element={<ContactUs />} />
          <Route path="Home" element={<Home />} />
          <Route path="login" element={<SignIn />} />
          <Route path="Store" element={<Store />} />
          <Route path="Store/StoreItem" element={<StoreItem />} />
          <Route path="Orders" element={<OrdersPage />} />
        </Routes>
      </div>
      <AlertBox></AlertBox>
      <Footer></Footer>
    </div>
  );
}

export default App;
