import React from "react";
import ShopByCategoriesItem from "./ShopByCategoriesItem";
import Item1 from "../assets/images/category-item-1.jpg";

const ShopByCategories = () => {
  return (
    <div className="shop-by-categories-wrapper container">
      <ShopByCategoriesItem title="Accessories" inStock={3} imgSrc={Item1} />
      <ShopByCategoriesItem title="bags" inStock={7} imgSrc={Item1} />
      <ShopByCategoriesItem title="Electronics" inStock={4} imgSrc={Item1} />
      <ShopByCategoriesItem title="Fashion" inStock={2} imgSrc={Item1} />
      <ShopByCategoriesItem title="Headphone" inStock={11} imgSrc={Item1} />
      <ShopByCategoriesItem title="Shoes" inStock={13} imgSrc={Item1} />
    </div>
  );
};

export default ShopByCategories;
