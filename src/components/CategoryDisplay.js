import React from "react";
import Catdata from "../alldata/Catdata.json";
import "./CategoryDisplay.css";
import { useLocation } from "react-router-dom";

const CategoryDisplay = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="category-display">
      <p style={{color: pathname === "/products" ? "rgb(12, 145, 52)" : ""}}>All</p>
      {Catdata && Catdata.map((category) => <p>{category.major}</p>)}
    </div>
  );
};

export default CategoryDisplay;
