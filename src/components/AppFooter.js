import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const AppFooter = () => {
  return (
    <div className="app-footer-wrapper container">
      <div className="footer-header d-flex align-center justify-between flex-wrap">
        <div className="left-side">
          <div className="font-bold f-size-14">SUBSCRIBE NEWSLETTER</div>
          <p className="f-size-13 m-t-7">
            Get all the latest information on Events, Sales and Offers.
          </p>
        </div>
        <form id="contact-form" autoComplete="off">
          <input type="text" name="email" placeholder="Emaill address..." />
          <button type="submit">subscribe</button>
        </form>
        <div className="social-media-side">
          <Link to="#">
            <FaFacebookF />
          </Link>
          <Link to="#">
            <FaTwitter />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
