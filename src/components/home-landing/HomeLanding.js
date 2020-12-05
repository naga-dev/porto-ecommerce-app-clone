import React from "react";
import { Link } from "react-router-dom";

// Assets
import Banner from "../../assets/images/banner1.jpg";

// Framer motion
import { motion } from "framer-motion";
const showNowVaritants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

const HomeLanding = () => {
  return (
    <div className="home-banner-wrapper">
      <div
        className="content"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="content-text d-flex flex-column">
          <motion.h3
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
          >
            get up to 30% off
          </motion.h3>
          <motion.h1
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            on jackets
          </motion.h1>
          <motion.div
            variants={showNowVaritants}
            whileHover="hover"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            // transition={{ delay: 0.9, type: "spring", stiffness: 50 }}
          >
            <Link to="/shop" className="shop-now">
              shop now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
