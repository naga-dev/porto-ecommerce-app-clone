import React from "react";
import { Link } from "react-router-dom";

const ShopByCategoriesItem = ({ title, inStock, imgSrc }) => {
  return (
    <Link to="#" className="shop-by-categories-item" style={{ color: "#000" }}>
      <img src={imgSrc} alt="item" />
      <div className="content d-flex align-center justify-center flex-column">
        <h4>{title}</h4>
        <span>{inStock} products</span>
      </div>
    </Link>
  );
};

export default ShopByCategoriesItem;
