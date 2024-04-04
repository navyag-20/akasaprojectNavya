import React from "react";
import "./CartCard.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const CartCard = ({ product }) => {
  return (
    <div>
      <Card variant="outlined" className="cartcard" style={{width:"27vw"}}>
        <CardMedia
          component="img"
          image={product.imagesource}
          alt={product.itemName}
          className="cartimage"
          style={{width:"10vw",objectFit:"contain"}}
        />
        <CardContent style={{ padding: "0", width:"27vw"}}>
          <div className="carthandles">
            <div className="cartdetails">
              <p>{product.itemName}</p>
              <p>{product.spec}</p>
              <p>{product.price}</p>
            </div>
            <div className="quantogg">
                <button>-</button>
                <button>1</button>
                <button>+</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCard;
