import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import ProductModal from "../product-modal/ProductModal";

// Assets
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";

// Framer motion
import { motion } from "framer-motion";

// Redux
import { connect } from "react-redux";
import { AddItems } from "../../redux/shopping-cart/shopping-cart.actions";

const ProductItem = ({
  item,
  view,
  addItems,
  category,
  productName,
  price,
  imgUrl,
  secondImgUr,
  isHot,
  isDiscount,
}) => {
  const [originalImg, setOriginalImg] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Clean up product name with URL
  const productRoute = productName.toLowerCase().replace(/ /g, "-");

  return (
    <>
      <div
        className={`product-item-wrapper ${
          view === "row" ? "show-one-row" : null
        }`}
      >
        <div
          className="product-image"
          onMouseOver={() => setOriginalImg(secondImgUr && false)}
          onMouseLeave={() => setOriginalImg(true)}
        >
          {originalImg ? (
            <img src={imgUrl} alt="product" />
          ) : (
            <img src={secondImgUr} alt="second" />
          )}
          {isHot && (
            <span className="offer d-flex align-center justify-center">
              hot
            </span>
          )}
          {isDiscount && (
            <span className="discount d-flex align-center justify-center">
              -20%
            </span>
          )}
          <motion.div className="quick-view" onClick={() => setShowModal(true)}>
            quick view
          </motion.div>
          <Link
            to={`/shop/${productRoute}`}
            className="go-to-product d-flex align-center justify-center"
          >
            <FaLongArrowAltRight />
          </Link>
        </div>

        <div className="product-content d-flex flex-column">
          <span className="category">{category}</span>
          <motion.div
            whileHover={{ scale: 1.2, originX: 0 }}
            transition={{ type: "spring", stiffness: "tween" }}
          >
            <Link to={`/shop/${productRoute}`} className="product-name">
              {productName}
            </Link>
          </motion.div>
          <div className="product-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="product-price">${price}.00</div>
          {view === "row" && (
            <>
              <p className="f-size-14 m-t-10 m-b-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                similique voluptate nostrum necessitatibus sequi, iure
                cupiditate ducimus facilis dolor! Vero.
              </p>
              <button
                className="add-to-card-btn d-flex align-center justify-center"
                onClick={() => addItems(item)}
              >
                Add to card
              </button>
            </>
          )}
        </div>
      </div>
      {showModal && (
        <ProductModal item={item} closeModal={() => setShowModal(false)} />
      )}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(AddItems(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
