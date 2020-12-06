import React from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/page-header/PageHeader";

// Framer motion
import { motion } from "framer-motion";
import routeMotion from "../../motion/RouteMotion";

// Redux
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/shopping-cart/shopping-cart.actions";

const CartPage = ({ cartItems, itemCount, clearItemFromCart }) => {
  console.log(cartItems);
  return (
    <motion.div
      variants={routeMotion}
      initial="hidden"
      animate="visiable"
      exit="exit"
    >
      <Navbar />
      <PageHeader prev="Home" next="cart" current="shop" />
      <div className="cart-page-wrapper container">
        <div className="cart-page-content-wrapper font">
          <div className="cart-page-content">
            <h3>
              your cart{" "}
              <span className="items-count-in-shopping-cart">
                ({itemCount} items)
              </span>
            </h3>
          </div>

          <div className="shopping-cart-table">
            {cartItems.length ? (
              <table>
                <thead>
                  <tr>
                    <th>item</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th>remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <img
                          src={item.imgUrl}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>100</td>
                      <td>
                        <span
                          style={{
                            cursor: "pointer",
                            color: "red",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                          onClick={() => clearItemFromCart(item)}
                        >
                          X
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h2>
                No items in your cart, continue{" "}
                <Link to="/shop" style={{ color: "red" }}>
                  Shopping
                </Link>
              </h2>
            )}
          </div>
        </div>

        <div style={{ color: "#e7040f", margin: "20px 0" }}>
          "*This payment for development purpose only*"
          <br />
          "*Please, use this following test credit cart number*"
          <br />
          "4242 4242 4242 4242" - EXP: 11 / 20 - CVV: 123
        </div>

        <div className="proceed-to-checkout">
          <ul className="proceed-to-checkout-list">
            <li>
              <span>Subtotal:</span>
              <span>$100</span>
            </li>
            <li>
              <span>Shipping:</span>
              <Link to="#">Add Info</Link>
            </li>
            <li>
              <span>Tax:</span>
              <span>$39.60</span>
            </li>
            <li>
              <span>Coupon Code:</span>
              <Link to="#">Add Coupon</Link>
            </li>
            <li>
              <span>Gift Certificate:</span>
              <Link to="#">Gift Certificate</Link>
            </li>
            <li>
              <span>Grand total:</span>
              <span>$100</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  itemCount: cartItems.reduce(
    (accumualatedQty, cartItem) => accumualatedQty + cartItem.quantity,
    0
  ),
});

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
