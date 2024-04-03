import React from "react";
import CategoryDisplay from "../components/CategoryDisplay";
import Proddata from "../alldata/Proddata.json";
import ProdCard from "../components/ProdCard";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <CategoryDisplay />
      <div className="products-display">
        {Proddata &&
          Proddata.sort((a, b) => b.score - a.score) // Sort the products by score in decreasing order
            .map((prod) => <ProdCard key={prod.id} product={prod} />)}
      </div>
    </div>
  );
};

export default Products;
