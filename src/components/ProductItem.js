import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductItem = ({
  category,
  productName,
  price,
  imgUrl,
  isHot,
  isDiscount,
}) => {
  return (
    <div className="product-item-wrapper">
      <Link to="#">
        <div className="product-image">
          <img src={imgUrl} alt="product" />
          {isHot && <span className="offer">hot</span>}
          {isDiscount && <span className="offer">Discount</span>}
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
      </div>
    </div>
  );
};

export default ProductItem;
