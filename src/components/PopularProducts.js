import React from "react";
import POPULAR_PRODUCTS from "../data/popular_products";
import ProductItem from "./ProductItem";

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
  return (
    <div className="container">
      <h3 style={title}>Popular products</h3>
      <div className="grid-content" style={wrapperStyle}>
        {POPULAR_PRODUCTS.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
