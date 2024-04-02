import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const CatCard = ({ category }) => {
  const navigate = useNavigate();
  
  function handleCategoryClick(path) {
    navigate(path);
  }
  return (
    <div>
      {/* <img src={category.imagesource} alt={category.desc}/>
      <p>{category.desc}</p> */}
      <Card
        variant="outlined"
        onClick={() => {
          handleCategoryClick(`/products?categoryFromPage=${category.desc}`);
        }}
      >
        <CardMedia
          component="img"
          image={category.imagesource}
          alt={category.desc}
        />
        <CardContent>{category.desc}</CardContent>
      </Card>
    </div>
  );
};

export default CatCard;
