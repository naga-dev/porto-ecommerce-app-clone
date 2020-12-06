import React from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "../../assets/images/logo.png";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/bag.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg";

// Components
import CardDropDownMenu from "../card-drop-down-menu/CardDropDownMenu";

// Redux
import { connect } from "react-redux";
import { togglecartSidebar } from "../../redux/cart-menu/cart-sidebar.actions";

const Navbar = ({ position, showCartSidebar, itemCount }) => {
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
      </ul>
      {/* Middle side */}

      {/* Toggle Side bar */}
      <div className="toggle-side-menu-icon" onClick={showCartSidebar}>
        <MenuIcon />
      </div>
      {/* Toggle Side bar */}

      {/* Right Side */}
      <ul className="left-side-wrapper d-flex align-center">
        <li>
          <Link to="/user/account">
            <UserIcon />
          </Link>
        </li>
        <li className="card-drop-down-wrapper" onClick={showCartSidebar}>
          <CartIcon />
          <span className="count">{itemCount}</span>
          <CardDropDownMenu />
        </li>
      </ul>
      {/* Right Side */}
    </div>
  );
};

const mapStateToProps = ({ cartSidebar: { hidden }, cart: { cartItems } }) => ({
  hidden,
  itemCount: cartItems.reduce(
    (accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity,
    0
  ),
});

const mapDispatchToProps = dispatch => ({
  showCartSidebar: () => dispatch(togglecartSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
