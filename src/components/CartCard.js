import React,{ useState } from "react";
import "./CartCard.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const CartCard = ({ product, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div>
      <Card variant="outlined" className="cartcard" style={{ width: "27vw" ,margin:"1vw"}}>
        <CardMedia
          component="img"
          image={product.imagesource}
          alt={product.itemName}
          className="cartimage"
          style={{ objectFit: "contain", width:"150px" }}
        />
        <CardContent style={{ padding: "0", width: "27vw" }}>
          <div className="carthandles">
            <div className="cartdetails">
              <p>{product.itemName}</p>
              <p>{product.spec}</p>
              <p>{product.price}</p>
            </div>
            <div className="quantogg">
              <button onClick={increaseQuantity}>-</button>
              <button>{quantity}</button>
              <button onClick={decreaseQuantity}>+</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCard;
