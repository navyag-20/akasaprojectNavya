import React, { useState } from "react";
import Logo from "../images/quickcartlogo.png";
import "./Navbar.css";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignupDialog";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


const Navbar = () => {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const closeLogin = () => {
    setOpenLogin(false);
  };
  const handleLogin = () => {
    setOpenLogin(true);
  };

  const closeSignup = () => {
    setOpenSignup(false);
  };
  const handleSignup = () => {
    setOpenSignup(true);
  };

  const closeCart = () => {
    setOpenCart(false);
  };
  const handleCart = () => {
    setOpenCart(true);
  };
  const handleProfile = () =>{
    navigate("/myorders");
  }

  return (
    <div className="navbar">
      <img src={Logo} alt="logo" onClick={() => navigate("/")} />
      <ul>
        <li onClick={handleLogin}>Log in</li>
        <li onClick={handleProfile}>My Orders</li>
      </ul>
      <button onClick={handleCart}>Cart</button>
      {openLogin && (
        <LoginDialog
          openLogin={openLogin}
          closeLogin={closeLogin}
          handleSignup={handleSignup}
        />
      )}
      {openSignup && (
        <SignupDialog
          openSignup={openSignup}
          closeSignup={closeSignup}
          handleLogin={handleLogin}
        />
      )}
      {openCart && <Cart openCart={openCart} closeCart={closeCart} />}
    </div>
  );
};

export default Navbar;
