import React from "react";
import "./Home.css";
import CatCard from "../components/CatCard";
import ProdCard from "../components/ProdCard";
import Catdata from "../alldata/Catdata.json"
import Proddata from "../alldata/Proddata.json";

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <h2>Top Categories</h2>
        <div className="category-cards">
          {Catdata &&
            Catdata.map((category) => (
              <CatCard key={category.id} category={category} />
            ))}
        </div>
        <h2>Top Products</h2>
        <div className="product-cards">
          {Proddata &&
            Proddata.map((product) => (
              <ProdCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
