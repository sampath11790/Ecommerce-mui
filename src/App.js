import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import NavigationBar from "./component/Navigation/NavigationBar";

function App() {
  return (
    <div className="App">
      <div>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/About" element={<About />} />

          {/* <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
