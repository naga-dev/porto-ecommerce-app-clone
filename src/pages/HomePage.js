import React from "react";
import HomeLanding from "../components/HomeLanding";
import Navbar from "../components/Navbar";
import OurFeatures from "../components/OurFeatures";
import PopularProducts from "../components/PopularProducts";
import ShopByCategories from "../components/ShopByCategories";

import { motion } from "framer-motion";
import routeMotion from "../motion/RouteMotion";

const HomePage = () => {
  return (
    <motion.div variants={routeMotion} initial="hidden" animate="visiable" exit="exit">
      <Navbar position="absolute" />
      <HomeLanding />
      <ShopByCategories />
      <PopularProducts />
      <OurFeatures />
    </motion.div>
  );
};

export default HomePage;
