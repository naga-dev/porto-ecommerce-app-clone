import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Selectors
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selectors";

// Components
import PageHeader from "../page-header/PageHeader";
import Navbar from "../navbar/Navbar";
import ShopTabSection from "../shop-tab-section/ShopTabSection";
import RelatedProductsSection from "../related-products-section/RelatedProductsSection";
import ProductsBlockColumns from "../product-block-columns/ProductsBlockColumns";

// Redux
import { AddItems } from "../../redux/shopping-cart/shopping-cart.actions";

// Framer motion
import { motion } from "framer-motion";
import routeMotion from "../../motion/RouteMotion";

// Assets
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const ProductPage = ({ match, addItems, shopItems }) => {
  const { params } = match;
  const currentProduct = shopItems
    .map(item => item)
    .filter(
      item =>
        item.productName.toLowerCase().replace(/ /g, "-") === params.product
    );
  const { productName, imgUrl, price } = currentProduct[0];

  console.log(currentProduct[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={routeMotion}
      initial="hidden"
      animate="visiable"
      exit="exit"
    >
      <Navbar />
      <PageHeader prev="home" current="shop" next="product name" />
      <div className="single-product-page-wrapper container">
        <div className="product-row">
          {/* Prouct image wrapper */}
          <div className="product-image-wrapper">
            <img src={imgUrl} alt="product" />
          </div>
          {/* Prouct image wrapper */}

          {/* Product details */}
          <div className="product-details-wrapper">
            <div
              className="m-b-10 font-500 f-size-25"
              style={{ color: "#222529" }}
            >
              {productName}
            </div>
            <div className="product-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="product-price-range">
              <span>${price}</span> <span>-</span> <span>$299.00</span>
            </div>

            <div className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
              non repellat nemo quasi sit eveniet fugit in id corrupti sequi
              praesentium quisquam, qui consequatur velit corporis quo ab
              dolores?
            </div>

            <div className="m-b-10">
              <div>
                <span
                  className="font-300 m-r-5 f-size-14"
                  style={{ color: "#000" }}
                >
                  sku:
                </span>
                <span className="f-size-14 font-400">654111995-1-1-2</span>
              </div>
              <div>
                <span
                  className="font-300 m-r-5 f-size-14"
                  style={{ color: "#000" }}
                >
                  categories:
                </span>
                <span className="f-size-14 font-400">bags, t-shirt</span>
              </div>
              <div>
                <span
                  className="font-300 m-r-5 f-size-14"
                  style={{ color: "#000" }}
                >
                  tags:
                </span>
                <span className="f-size-14 font-400">clothes, fashion</span>
              </div>
            </div>

            <div className="available-colors m-b-10 m-t-20">
              <span className="f-size-14 m-b-5" style={{ display: "block" }}>
                Colors
              </span>
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#81d742",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              />
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#6085a5",
                  display: "inline-block",
                }}
              />
            </div>

            <div className="available-size f-size-16">
              <span className="m-r-10">Size:</span>
              <span>M</span>
            </div>

            <div className="add-product-to-cart">
              <form
                className="d-flex align-center justify-between"
                onSubmit={e => e.preventDefault()}
              >
                <button
                  className="add-to-card-btn"
                  onClick={() => addItems(currentProduct[0])}
                >
                  add to cart
                </button>
              </form>
            </div>

            <div className="our-social-media d-flex align-center">
              <Link to="#" className="social-item">
                <FaFacebookF />
              </Link>
              <Link to="#" className="social-item">
                <FaTwitter />
              </Link>
              <Link to="#" className="social-item">
                <FaInstagram />
              </Link>
              <Link to="#" className="social-item">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          {/* Product details */}
        </div>
        <ShopTabSection />
        <RelatedProductsSection />
        <ProductsBlockColumns />
      </div>
    </motion.div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopItems,
});

const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(AddItems(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
