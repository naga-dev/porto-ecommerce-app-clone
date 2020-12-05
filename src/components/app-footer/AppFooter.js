import React from "react";
import { Link } from "react-router-dom";

// Assets
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
      <div className="footer-down">
        <div className="column">
          <div className="title font-700 f-size-15 m-b-15">contact info</div>
          <div className="column-item d-flex flex-column">
            <span className="f-size-12 font-300">address</span>
            <span>1234 Street Name, City, England</span>
          </div>
          <div className="column-item d-flex flex-column">
            <span className="f-size-12 font-300">email</span>
            <span>mail@example.com</span>
          </div>
          <div className="column-item d-flex flex-column">
            <span className="f-size-12 font-300">phone</span>
            <span>(123) 456-7890</span>
          </div>
          <div className="column-item d-flex flex-column">
            <span className="f-size-12 font-300">WORKING DAYS/HOURS:</span>
            <span>Mon - Sun / 9:00 AM - 8:00 PM</span>
          </div>
        </div>
        <div className="column">
          <div className="title font-700 f-size-15 m-b-15">my account</div>
          <div className="column-item d-flex flex-column">
            <Link to="#" className="f-size-12 font-300">
              about us
            </Link>
            <Link to="#" className="f-size-14 font-300">
              contact us
            </Link>
            <Link to="#" className="f-size-14 font-300">
              my account
            </Link>
            <Link to="#" className="f-size-14 font-300">
              our orders
            </Link>
            <Link to="#" className="f-size-14 font-300">
              advanced search
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="title font-700 f-size-15 m-b-15">main features</div>
          <div className="column-item d-flex flex-column">
            <Link to="#" className="f-size-14 font-300">
              Super Fast WordPress Theme
            </Link>
            <Link to="#" className="f-size-14 font-300">
              1st Fully working Ajax Theme
            </Link>
            <Link to="#" className="f-size-14 font-300">
              36 Unique Shop Layouts
            </Link>
            <Link to="#" className="f-size-14 font-300">
              Powerful Admin Panel
            </Link>
            <Link to="#" className="f-size-14 font-300">
              Mobile & Retina Optimized
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
