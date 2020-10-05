import React from "react";
import { FaCreditCard, FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";

const OurFeatures = () => {
  return (
    <div className="our-features-wrapper container">
      <div className="our-features-item d-flex flex-column align-center">
        <RiCustomerService2Line />
        <h4>Customer Support</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapib.
        </p>
      </div>
      <div className="our-features-item d-flex flex-column align-center">
        <FaCreditCard />
        <h4>secured payment</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapib.
        </p>
      </div>
      <div className="our-features-item d-flex flex-column align-center">
        <GiReturnArrow />
        <h4>free return</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapib.
        </p>
      </div>
      <div className="our-features-item d-flex flex-column align-center">
        <FaShippingFast />
        <h4>free shipping</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapib.
        </p>
      </div>
    </div>
  );
};

export default OurFeatures;
