import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductItem = ({
  category,
  productName,
  price,
  imgUrl,
  secondImgUr,
  isHot,
  isDiscount,
  view,
}) => {
  const [originalImg, setOriginalImg] = useState(true);

  return (
    <div
      className={`product-item-wrapper ${
        view === "row" ? "show-one-row" : null
      }`}
    >
      <Link to="#">
        <div
          className="product-image"
          onMouseOver={() => setOriginalImg(false)}
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
          <div className="quick-view">quick view</div>
        </div>
      </Link>
      <div className="product-content d-flex flex-column">
        <span className="category">{category}</span>
        <Link to="#" className="product-name">
          {productName}
        </Link>
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
              similique voluptate nostrum necessitatibus sequi, iure cupiditate
              ducimus facilis dolor! Vero.
            </p>
            <button className="add-to-card-btn d-flex align-center justify-center">
              Add to card
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
