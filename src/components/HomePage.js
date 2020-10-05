import React from "react";
import OurFeatures from "./OurFeatures";
import PopularProducts from "./PopularProducts";
import ShopByCategories from "./ShopByCategories";

export const HomePage = () => {
  return (
    <>
      <ShopByCategories />
      <PopularProducts />
      <OurFeatures />
    </>
  );
};
