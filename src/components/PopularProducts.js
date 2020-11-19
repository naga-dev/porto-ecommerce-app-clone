import React, { useEffect } from "react";
import POPULAR_PRODUCTS from "../data/popular_products";
import ProductItem from "./ProductItem";

import AOS from "aos";
import "aos/dist/aos.css";

const wrapperStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const title = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#302e2a",
  textTransform: "uppercase",
  fontSize: "1rem",
};

const PopularProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="container" data-aos="zoom-in">
      <h3 style={title}>Popular products</h3>
      <div className="grid-content" style={wrapperStyle}>
        {POPULAR_PRODUCTS.map(item => (
          <ProductItem key={item.id} {...item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
