import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const CatCard = ({ category }) => {
  const navigate = useNavigate();

  function handleCategoryClick() {
    navigate("/classified");
  }
  return (
    <div>
      <Card
        variant="outlined"
        style={{ width: "16vw", cursor: "pointer" }}
        onClick={() => {
          handleCategoryClick();
        }}
      >
        <CardMedia
          component="img"
          image={category.imagesource}
          height="150"
          alt={category.major}
        />
        <CardContent
          style={{
            fontWeight: "500",
            fontSize:"1.4vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {category.major}
        </CardContent>
      </Card>
    </div>
  );
};

export default CatCard;
