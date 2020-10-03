import React from "react";
import { Link } from "react-router-dom";

// Utils
import Banner from "../assets/images/banner1.jpg";

const HomeLanding = () => {
  return (
    <div className="home-banner-wrapper">
      <div
        className="content"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="content-text d-flex flex-column">
          <h3>get up to 30% off</h3>
          <h1>on jackets</h1>
          <Link to="/shop" className="shop-now">
            shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
