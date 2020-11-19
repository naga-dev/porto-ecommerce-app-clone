import React, { useEffect } from "react";
import ShopByCategoriesItem from "./ShopByCategoriesItem";
import CATEGORIES_DATA from "../data/categories";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopByCategories = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <motion.div className="shop-by-categories-wrapper container" data-aos="fade-down">
      <h3 className="title">Shop By Categoreis</h3>
      <div className="category-row">
        {CATEGORIES_DATA.map(item => (
          <ShopByCategoriesItem key={item.id} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default ShopByCategories;
