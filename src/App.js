import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@flaticon/flaticon-uicons/css/all/all.css";
import Navbar from "./component/Navbar";
import AboutUs from "./component/aboutUs";
import Product from "./component/product";
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
