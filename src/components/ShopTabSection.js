import React, { useState } from "react";
import { MdDone } from "react-icons/md";

const ShopTabSection = () => {
  const [activeTab, setActivetab] = useState("description");
  return (
    <>
      {/* Tabs content */}
      <div className="tabs-wrapper">
        <div className="tab-switcher-wrapper">
          <div
            className={`tab-switcher-item ${
              activeTab === "description" && "active-tab"
            } `}
            onClick={() => setActivetab("description")}
          >
            description
          </div>
          <div
            className={`tab-switcher-item ${
              activeTab === "reviews" && "active-tab"
            } `}
            onClick={() => setActivetab("reviews")}
          >
            reviews
          </div>
          <div
            className={`tab-switcher-item ${
              activeTab === "shipping" && "active-tab"
            } `}
            onClick={() => setActivetab("shipping")}
          >
            shipping & returns
          </div>
        </div>
        <div className="tab-content-wrapper">
          {activeTab === "description" && (
            <div className="tab-content-item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, nostrud ipsum consectetur sed do, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat.
              </p>

              <ul>
                <li>
                  <MdDone />
                  Any Product types that You want – Simple, Configurable
                </li>
                <li>
                  <MdDone />
                  Downloadable/Digital Products, Virtual Products
                </li>
                <li>
                  <MdDone />
                  Inventory Management with Backordered items
                </li>
              </ul>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="tab-content-item">
              <b>How to write product descriptions that sell</b>
              <p>
                One of the best things you can do to make your store successful
                is invest some time in writing great product descriptions. You
                want to provide detailed yet concise information that will
                entice potential customers to buy.
              </p>

              <br />
              <br />
              <b>Find differentiators</b>
              <p>
                Pepper your features with details that show how the product
                stands out against similar offerings. For clothes: is it vintage
                or hard to find? For art: is the artist well known? For home
                décor: is it a certain style like mid-century modern? Unique
                product descriptions not only help you stand out, they improve
                your SEO.
              </p>
            </div>
          )}
          {activeTab === "shipping" && (
            <div className="tab-content-item">
              <br />
              <br />
              <b>Think like a consumer</b>
              <p>
                Think about what you as a consumer would want to know, then
                include those features in your description. For clothes:
                materials and fit. For food: ingredients and how it was
                prepared. Bullets are your friends when listing features — try
                to limit each one to 5-8 words.
              </p>

              <br />
              <br />
              <b>Find differentiators</b>
              <p>
                Pepper your features with details that show how the product
                stands out against similar offerings. For clothes: is it vintage
                or hard to find? For art: is the artist well known? For home
                décor: is it a certain style like mid-century modern? Unique
                product descriptions not only help you stand out, they improve
                your SEO.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Tabs content */}
    </>
  );
};

export default ShopTabSection;
