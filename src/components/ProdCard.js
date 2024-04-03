import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ProdCard.css";

const ProdCard = ({ product }) => {
  const navigate = useNavigate();

  function handleProductClick(path) {
    navigate(path);
  }
  return (
    <div>
      <Card
        variant="outlined"
        style={{ width: "16vw", cursor: "pointer", height: "22vw" }}
        onClick={() => {
          handleProductClick(`/products?categoryFromPage=${product.itemName}`);
        }}
      >
        <CardMedia
          component="img"
          image={product.imagesource}
          height="150"
          alt={product.itemName}
          style={{ objectFit: "contain", borderBottom: "solid 1px #e3e3e3" }}
        />
        <CardContent style={{ padding: "0.7vw 1.2vw", fontWeight: "500" }}>
          <div>
            <p className="itemName">{product.itemName}</p>
            <p className="spec">{product.spec}</p>
            <div className="price-add">
              <p>{product.price}</p>
              <Button
                variant="outlined"
                size="small"
                style={{
                  borderColor: "rgb(31, 163, 70)",
                  color: "rgb(31, 163, 70)",
                }}
              >
                ADD
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProdCard;
