import React from "react";

// components
import BlockColumnsWrap from "../block-column-wrap/BlockColumnsWrap";

const ProductsBlockColumns = () => {
  const blockWrapper = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    borderTop: "1px solid #e7e7e7",
    padding: "30px 0",
  };
  return (
    <div style={blockWrapper}>
      <BlockColumnsWrap title="FEATURED PRODUCTS" />
      <BlockColumnsWrap title="BEST SELLING PRODUCTS" />
      <BlockColumnsWrap title="LATEST PRODUCTS" />
      <BlockColumnsWrap title="TOP RATED PRODUCTS" />
    </div>
  );
};

export default ProductsBlockColumns;
