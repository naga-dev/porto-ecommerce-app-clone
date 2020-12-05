import React from "react";

// Components
import POPULAR_PRODUCTS from "../../data/popular_products";
import ProductItem from "../product-item/ProductItem";

const RelatedProductsSection = () => {
  // JSS
  const wrapper = {
    margin: "30px auto",
  };
  const title = {
    paddingBottom: "10px",
  };
  const contentWrapper = {
    borderTop: "1px solid #e7e7e7",
    paddingTop: "20px",
  };

  return (
    <div style={wrapper}>
      <h4 style={title}>Related Products</h4>
      <div style={contentWrapper}></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
        }}
      >
        {POPULAR_PRODUCTS.filter((item, idx) => idx < 5).map(item => {
          return <ProductItem {...item} item={item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProductsSection;
