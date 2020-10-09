import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductModal = ({
  category,
  productName,
  price,
  imgUrl,
  secondImgUr,
  isHot,
  isDiscount,
  closeModal,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="product-modal-wrapper">
      <div className="product-modal">
        <div className="content-wrapper">
          {/* Prouct image wrapper */}
          <div className="product-image-wrapper">
            <img src={imgUrl} alt="product" />
            <div className="thumbnail-image">
              <img src={secondImgUr} alt="alternat" />
            </div>
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
                onSubmit={handleSubmit}
              >
                <div className="btn-wrapper">
                  <button className="increase-quantity">+</button>
                  <span className="quantity">1</span>
                  <button className="descrese-quantity">-</button>
                </div>
                <button className="add-to-card-btn">add to cart</button>
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

            <div className="close-modal" onClick={() => closeModal()}>
              X
            </div>
          </div>
          {/* Product details */}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
