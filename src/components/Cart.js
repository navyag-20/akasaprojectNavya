import React from "react";
import Drawer from "@mui/material/Drawer";
import "./Cart.css";
import CartCard from "./CartCard";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { openCart, closeCart } = props;
  const navigate = useNavigate();

  function handleCheckoutClick() {
    navigate("/checkout");
    closeCart();
  }
  var quantity = 1;

  const products = [
    {
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
    },
    {
      id: "6P",
      itemName: "Pillsbury Atta",
      brandName: "Pillsbury",
      spec: "5kg",
      price: "₹200",
      stock: 150,
      majorCat: "Grains & Cereals",
      minorCat: "Flour & Sooji",
      score: 3,
      imagesource:
        "https://m.media-amazon.com/images/I/71XsEoMZ-GL._AC_UF1000,1000_QL80_.jpg",
      notifyUsers: [],
    }
  ];

  return (
    <div>
      <Drawer open={openCart} anchor="right" onClose={closeCart} className="drawer">
        <div style={{ width: "30vw" }} className="my-cart">
          <h2>My Cart</h2>
          {products &&
            products.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                initialQuantity={quantity}
              />
            ))}

          <Button
            variant="contained"
            style={{ backgroundColor: "rgb(31, 163, 70)", width: "90%" }}
            className="checkout-btn"
            onClick={() => handleCheckoutClick()}
          >
            Checkout
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
