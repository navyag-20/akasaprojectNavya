import React from "react";
import "./Home.css";
import CatCard from "../components/CatCard";
import ProdCard from "../components/ProdCard";
import Catdata from "../alldata/Catdata.json";
import Proddata from "../alldata/Proddata.json";
import Banner from "../images/bannerImage.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  function handleViewClick() {
    navigate("/products");
  }
  return (
    <div className="home-page">
      <img src={Banner} alt="banner" />
      <div className="categories-prods">
        <h2>Top Categories</h2>
        <div className="category-cards">
          {Catdata &&
            Catdata.map((category) => (
              <CatCard key={category.id} category={category} />
            ))}
        </div>
        <div className="prods">
          <h2 style={{ paddingTop: "2vw" }}>Best Selling Products</h2>
          <p className="view-all" onClick={handleViewClick}>View All</p>
        </div>
        <div className="product-cards">
          {Proddata &&
            Proddata.slice(0, 5).map((product) => (
              <ProdCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
