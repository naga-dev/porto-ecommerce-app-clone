import React from "react";

// Components
import HomeLanding from "../components/home-landing/HomeLanding";
import Navbar from "../components/navbar/Navbar";
import OurFeatures from "../components/our-features/OurFeatures";
import PopularProducts from "../components/popular-products-section/PopularProducts";
import ShopByCategories from "../components/shop-by-categories/ShopByCategories";

// Framer motion
import { motion } from "framer-motion";
import routeMotion from "../motion/RouteMotion";

const HomePage = () => {
  return (
    <motion.div
      variants={routeMotion}
      initial="hidden"
      animate="visiable"
      exit="exit"
    >
      <Navbar position="absolute" />
      <HomeLanding />
      <ShopByCategories />
      <PopularProducts />
      <OurFeatures />
    </motion.div>
  );
};

export default HomePage;
