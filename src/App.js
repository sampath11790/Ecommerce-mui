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
import { useDispatch } from "react-redux";
import { AuthSliceAction } from "./Reduxstore/auth/Authslice";
import React, { useEffect } from "react";

function App() {
  const Dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const login = localStorage.getItem("login");
  useEffect(() => {
    Dispatch(AuthSliceAction.setAuth({ login: login, token: token }));
  }, []);
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

      <Footer></Footer>
    </div>
  );
}

export default App;
