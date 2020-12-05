import React from "react";

// Dummy Data
import POPULAR_PRODUCTS from "../../data/popular_products";
import BlockColumnItem from "../block-column-item/BlockColumnItem";

const BlockColumnsWrap = ({ title }) => {
  return (
    <div>
      <h6>{title}</h6>
      {POPULAR_PRODUCTS.slice(0, 3).map(item => (
        <BlockColumnItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BlockColumnsWrap;
