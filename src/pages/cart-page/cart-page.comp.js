import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Img from "../../assets/images/category-item-1.jpg";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import routeMotion from "../../motion/RouteMotion";

import AOS from "aos";
import "aos/dist/aos.css";

const CartPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <motion.div variants={routeMotion} initial="hidden" animate="visiable" exit="exit">
      <Navbar />
      <PageHeader prev="Home" next="cart" current="shop" />
      <div className="cart-page-wrapper container">
        <div className="cart-page-content-wrapper font">
          <div className="cart-page-content">
            <h3>
              your cart <span className="items-count-in-shopping-cart">(1 items)</span>
            </h3>
          </div>

          <div className="shopping-cart-table" data-aos="fade-left">
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
                <tr>
                  <td>
                    <img src={Img} alt="" style={{ width: "100px" }} />
                  </td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>
                    <span
                      style={{
                        cursor: "pointer",
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      X
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ color: "#e7040f", margin: "20px 0" }}>
          "*This payment for development purpose only*"
          <br />
          "*Please, use this following test credit cart number*"
          <br />
          "4242 4242 4242 4242" - EXP: 11 / 20 - CVV: 123
        </div>

        <div className="proceed-to-checkout" data-aos="zoom-out">
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

export default CartPage;
