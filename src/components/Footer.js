import React from "react";
import "./Footer.css";
import Catdata from "../alldata/Catdata.json";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  function clickCat() {
    navigate("/classified");
  }
  return (
    <div className="footer">
      <div>
        <h3>Categories:</h3>
        <div className="footer-cols">
          <div>
            {Catdata &&
              Catdata.slice(0, 5).map((category) => (
                <p onClick={() => clickCat()}>{category.major}</p>
              ))}
          </div>
          <div>
            {Catdata.slice(5).map((category, index) => (
              <div key={index}>
                <p>{category.major}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3>Useful Links:</h3>
        <div className="footer-cols">
          <div>
            <p>About</p>
            <p>Contact Us</p>
            <p>Blog</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
