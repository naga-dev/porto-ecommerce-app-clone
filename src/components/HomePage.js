import React from "react";
import PopularProducts from "./PopularProducts";
import ShopByCategories from "./ShopByCategories";

export const HomePage = () => {
  return (
    <>
      <ShopByCategories />
      <PopularProducts />
    </>
  );
};
