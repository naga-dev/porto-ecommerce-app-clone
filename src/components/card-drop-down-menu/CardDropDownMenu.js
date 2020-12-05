import React from "react";
import { Link } from "react-router-dom";

// Assets
import img from "../../assets/images/category-item-1.jpg";

const CartDropDownMenu = ({ toggleProductCart }) => {
  return (
    <>
      {toggleProductCart && (
        <div className="product-in-your-cart">
          <div className="cart-product-details">
            <div className="product-img">
              <img src={img} id="product-example-img" alt="cart-product" />
            </div>

            <div className="product-details">
              <div className="product-name">coco lee</div>
              <Link to="#" className="product-category">
                productName
              </Link>
              <div className="product-qty">
                <span>1 X</span>
                <span className="product-price"> 100</span>
              </div>
            </div>
          </div>

          <Link to="/cart" id="view-your-cart">
            view cart
          </Link>

          <Link to="/checkout" id="checkout-now">
            check out now
          </Link>

          <span className="or-use">-- or use --</span>
          {/* <Link to="#" className="checkout-with-paypal">
            <img src={PayPalCheckout} alt="paypal-chckout" />
          </Link> */}
        </div>
      )}
    </>
  );
};

export default CartDropDownMenu;
