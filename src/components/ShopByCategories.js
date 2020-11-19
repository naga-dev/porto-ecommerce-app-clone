import React from "react";
import ShopByCategoriesItem from "./ShopByCategoriesItem";
import CATEGORIES_DATA from "../data/categories";

import { motion } from "framer-motion";

const categoriesMotion = {
  hidden: {
    opactiy: 0,
    x: "-100vw",
  },
  visiable: {
    opactiy: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duraction: 0.4,
    },
  },
};

const ShopByCategories = () => {
  return (
    <motion.div
      className="shop-by-categories-wrapper container"
      variants={categoriesMotion}
      initial="hidden"
      animate="visiable"
    >
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
