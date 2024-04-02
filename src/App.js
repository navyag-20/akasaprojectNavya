import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Checkout from "./screens/Checkout";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
export default App;
