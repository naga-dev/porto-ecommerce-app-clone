import React from "react";
import HomeLanding from "../components/HomeLanding";
import Navbar from "../components/Navbar";
import OurFeatures from "../components/OurFeatures";
import PopularProducts from "../components/PopularProducts";
import ShopByCategories from "../components/ShopByCategories";

const HomePage = () => {
  return (
    <>
      <Navbar position="absolute" />
      <HomeLanding />
      <ShopByCategories />
      <PopularProducts />
      <OurFeatures />
    </>
  );
};

export default HomePage;
