import React from "react";
import "./Footer.css";
import Catdata from "../alldata/Catdata.json";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h3>Categories:</h3>
        <div className="footer-cols">
          <div>
            {Catdata &&
              Catdata.slice(0, 5).map((category) => <p>{category.major}</p>)}
          </div>
          <div>
            {Catdata.slice(5).map((category, index) => (
              <div key={index}><p>{category.major}</p></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
