import React from "react";
import { Link } from "react-router-dom";

// Utils
import Logo from "../assets/images/logo.png";
import { ReactComponent as SearchIcon } from "../assets/svg/loupe.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user.svg";
import { ReactComponent as HeartIcon } from "../assets/svg/heart.svg";
import { ReactComponent as CartIcon } from "../assets/svg/bag.svg";
import { ReactComponent as MenuIcon } from "../assets/svg/menu.svg";

const Navbar = ({ position }) => {
  return (
    <div
      className="app-navbar-wrapper d-flex align-center justify-between"
      style={{ position }}
    >
      {/* Left Side */}
      <Link to="/" className="app-logo">
        <img src={Logo} alt="logo" />
      </Link>
      {/* Left Side */}

      {/* Middle side */}
      <ul className="navigator-wrapper d-flex align-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">categories</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
        <li>
          <Link to="/features">features</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
      </ul>
      {/* Middle side */}

      {/* Toggle Side bar */}
      <div className="toggle-side-menu-icon">
        <MenuIcon />
      </div>
      {/* Toggle Side bar */}

      {/* Right Side */}
      <ul className="left-side-wrapper d-flex align-center">
        <li>
          <Link to="#">
            <SearchIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            <UserIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            <HeartIcon />
            <span className="count">0</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <CartIcon />
            <span className="count">0</span>
          </Link>
        </li>
      </ul>
      {/* Right Side */}
    </div>
  );
};

export default Navbar;
