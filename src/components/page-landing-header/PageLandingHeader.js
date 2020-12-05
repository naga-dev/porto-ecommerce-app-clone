import React from "react";
import { Link } from "react-router-dom";

// Assets
import { FaChevronRight } from "react-icons/fa";

const PageLandingHeader = ({ title }) => {
  const wrapper = {
    backgroundColor: "#f4f4f4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 0",
    flexDirection: "column",
  };
  const navigationList = {
    margin: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",

    links: {
      margin: "0 10px",
      color: "#000",
      fontWeight: "500",
    },
    icons: {
      fontSize: "10px",
    },
    currentLink: {
      color: "gray",
    },
  };

  return (
    <div style={wrapper}>
      <ul style={navigationList}>
        <li>
          <Link to="/" style={navigationList.links}>
            Home
          </Link>
        </li>
        <FaChevronRight style={navigationList.icons} />
        <li>
          <Link to="/shop" style={navigationList.links}>
            Shop
          </Link>
        </li>
        <FaChevronRight
          style={{ ...navigationList.icons, marginRight: "10px" }}
        />
        <span style={navigationList.currentLink}>My Account</span>
      </ul>
      <h3>{title}</h3>
    </div>
  );
};

export default PageLandingHeader;
