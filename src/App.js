import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@flaticon/flaticon-uicons/css/all/all.css";
import Navbar from "./component/Navbar";
import AboutUs from "./component/aboutUs";
import Product from "./component/product";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
