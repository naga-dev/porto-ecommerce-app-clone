import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { FaMinus } from "react-icons/fa";
import PageBanner from "../assets/images/shop/page-banner.jpg";
import { Link } from "react-router-dom";
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill } from "react-icons/bs";

import POPULAR_PRODUCTS from "../data/popular_products";
import ProductItem from "../components/ProductItem";
import { motion } from "framer-motion";
import routeMotion from "../motion/RouteMotion";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopPage = () => {
  const [orderBy, setOrderBy] = useState("latest");
  const [view, setView] = useState("grid");

  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: `${view === "grid" ? "repeat(auto-fit, minmax(200px, 1fr))" : "1fr"}`,
    gap: "20px",
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <motion.div variants={routeMotion} initial="hidden" animate="visiable" exit="exit">
      <Navbar />
      <PageHeader prev="home" current="shop" />

      <div className="shop-page-wrapper container" data-aos="zoom-in">
        <div className="page-side-menu">
          <ul>
            <div className="column-header d-flex align-center justify-between p-b-20">
              <div className="title p-b-5">categories</div>
              <FaMinus />
            </div>
            <li className="slide-menu-list-item">
              <ul className="toggle-list d-flex flex-column">
                <div className="header d-flex align-center justify-between">
                  <span>acessories</span>
                </div>
              </ul>
            </li>
            <li className="slide-menu-list-item">
              <ul className="toggle-list d-flex flex-column">
                <div className="header d-flex align-center justify-between">
                  <span>fashion</span>
                </div>
              </ul>
            </li>
            <li className="slide-menu-list-item">
              <ul className="toggle-list d-flex flex-column">
                <div className="header d-flex align-center justify-between">
                  <span>electronics</span>
                </div>
              </ul>
            </li>

            <div className="column-header d-flex align-center justify-between p-b-20">
              <div className="title p-b-5 m-t-15">colors</div>
              <FaMinus />
            </div>

            <div className="slide-menu-list-item">
              <li className="color-item d-flex align-center">
                <span className="color-squre m-r-10" style={{ backgroundColor: "#dda756" }} />
                <span className="color-name">Brown</span>
              </li>
              <li className="color-item d-flex align-center">
                <span className="color-squre m-r-10" style={{ backgroundColor: "#7bbad1" }} />
                <span className="color-name">Lightblue</span>
              </li>
              <li className="color-item d-flex align-center">
                <span className="color-squre m-r-10" style={{ backgroundColor: "#81d742" }} />
                <span className="color-name">Green</span>
              </li>
              <li className="color-item d-flex align-center">
                <span className="color-squre m-r-10" style={{ backgroundColor: "#6085a5" }} />
                <span className="color-name">Indigo</span>
              </li>
              <li className="color-item d-flex align-center">
                <span className="color-squre m-r-10" style={{ backgroundColor: "#000000" }} />
                <span className="color-name">Black</span>
              </li>
              <li className="color-item d-flex align-center">
                <span className="color-squre m-r-10" style={{ backgroundColor: "#0188cc" }} />
                <span className="color-name">Blue</span>
              </li>
              <li className="color-item d-flex align-center">
                <span className="color-squre m-r-10" style={{ backgroundColor: "#ab6e6e" }} />
                <span className="color-name">Red</span>
              </li>
            </div>

            <div className="column-header d-flex align-center justify-between p-b-20">
              <div className="title p-b-5 m-t-15">Sizes</div>
              <FaMinus />
            </div>
            <li className="slide-menu-list-item d-flex">
              <span className="size-squre d-flex align-center justify-center f-size-12">xl</span>
              <span className="size-squre d-flex align-center justify-center f-size-12">l</span>
              <span className="size-squre d-flex align-center justify-center f-size-12">m</span>
              <span className="size-squre d-flex align-center justify-center f-size-12">s</span>
            </li>
          </ul>
        </div>

        <div className="page-main-content">
          {/* Page banner */}
          <div
            className="page-banner-wrapper"
            style={{
              backgroundImage: `url(${PageBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img src={PageBanner} alt="banner" /> */}
            <div className="banner-content d-flex flex-column">
              <h3 className="f-size-40">UP TO 30% OFF ON JACKETS</h3>
              <Link to="/shop" className="shop-now m-t-20">
                shop now
              </Link>
            </div>
          </div>
          {/* Page banner */}

          {/* Product settings */}
          <div className="product-settings d-flex align-center justify-between">
            <div className="sort-by m-t-20 d-flex align-center">
              <span className="f-size-12 font-400">SORT BY</span>
              <select
                name="orderby"
                className="orderBy"
                value={orderBy}
                onChange={e => setOrderBy(e.target.value)}
              >
                <option value="date">Sort by latest</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>

            <div className="change-view-wrapper d-flex align-center">
              <span className="f-size-12 font-400">VIEW</span>
              <span
                className={view === "grid" ? "active-view" : undefined}
                onClick={() => setView("grid")}
              >
                <BsFillGrid3X3GapFill />
              </span>
              <span
                className={view === "row" ? "active-view" : undefined}
                onClick={() => setView("row")}
              >
                <BsFillGrid1X2Fill />
              </span>
            </div>
          </div>
          {/* Product settings */}

          <div className="m-t-30" style={wrapperStyle}>
            {POPULAR_PRODUCTS.map(item => (
              <ProductItem key={item.id} {...item} view={view} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopPage;
