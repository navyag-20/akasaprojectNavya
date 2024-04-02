import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const ProdCard = ({product}) => {
  const navigate = useNavigate();

  function handleProductClick(path) {
    navigate(path);
  }
  return (
    <div>
      <Card
        variant="outlined"
        onClick={() => {
          handleProductClick(`/products?categoryFromPage=${product.desc}`);
        }}
      >
        <CardMedia
          component="img"
          image={product.imagesource}
          alt={product.desc}
        />
        <CardContent>{product.desc}</CardContent>
      </Card>
    </div>
  );
};

export default ProdCard;
