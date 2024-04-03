import React from "react";
import Catdata from "../alldata/Catdata.json";
import Proddata from "../alldata/Proddata.json";
import ProdCard from "../components/ProdCard";
import "./ClassifiedProds.css";
import "../components/CategoryDisplay";
import CategoryDisplay from "../components/CategoryDisplay";

const ClassifiedProds = () => {
  const firstCategory = Catdata[0];
  return (
    <div>
      <CategoryDisplay />
      <div className="classified-display">
        <div className="minor-categories">
          {firstCategory &&
            firstCategory.minor.map((minor) => (
              <p key={minor.id}>{minor.minorName}</p>
            ))}
        </div>
        <div className="classified-products">
          {Proddata &&
            Proddata.filter((prod) => prod.minorCat === "Fresh Fruits").map(
              (prod) => <ProdCard key={prod.id} product={prod} />
            )}
        </div>
      </div>
    </div>
  );
};

export default ClassifiedProds;
