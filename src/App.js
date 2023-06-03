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

function App() {
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
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
