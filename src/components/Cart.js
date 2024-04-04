import React from "react";
import Drawer from "@mui/material/Drawer";
import "./Cart.css";
import CartCard from "./CartCard";
import Button from "@mui/material/Button";

const Cart = (props) => {
  const product = {
    id: "1P",
    itemName: "Amul Toned Milk",
    brandName: "Amul",
    spec: "1L",
    price: "₹40",
    stock: 100,
    majorCat: "Dairy and Breads",
    minorCat: "Milk & Cream",
    score: 3,
    imagesource:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
    notifyUsers: [
      {
        userID: "1U",
        quant: 5,
      },
      {
        userID: "2U",
        quant: 2,
      },
    ],
  };
  const { openCart, closeCart } = props;
  return (
    <div>
      <Drawer open={openCart} anchor="right" onClose={closeCart}>
        <div style={{ width: "30vw" }} className="my-cart">
          <h2>My Cart</h2>
          <CartCard key={product.id} product={product} />
          <Button
            variant="contained"
            style={{ backgroundColor: "rgb(31, 163, 70)",width:"90%"}}
            className="checkout-btn"
          >
            Checkout
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
