import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Products from "./screens/Products";
import ClassifiedProds from "./screens/ClassifiedProds";
import Checkout from "./screens/Checkout";
import MyOrders from "./screens/MyOrders";
import Success from "./screens/Success";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classified" element={<ClassifiedProds />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
