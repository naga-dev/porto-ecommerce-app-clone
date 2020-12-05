import React from "react";

// Components
import ShopByCategoriesItem from "../shop-by-categories-item/ShopByCategoriesItem";

// Dummy Data
import CATEGORIES_DATA from "../../data/categories";

const ShopByCategories = () => {
  return (
    <div className="shop-by-categories-wrapper container">
      <h3 className="title">Shop By Categoreis</h3>
      <div className="category-row">
        {CATEGORIES_DATA.map(item => (
          <ShopByCategoriesItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
