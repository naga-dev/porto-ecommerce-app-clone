import React from "react";

// Assets
import { Close, Sidebar, Title, Wrapper } from "./cart-sidebar.styles";

// Redux stuff
import { connect } from "react-redux";
import { togglecartSidebar } from "../../redux/cart-menu/cart-sidebar.actions";

// Components
import CartProduct from "../cart-product/cart-product.comp";
import CustomLink from "../custom-link/custom-link.comp";

const CartSidebar = ({ hideSidebar, hidden, cartItems }) => {
  return (
    <>
      {hidden && (
        <Wrapper>
          <Sidebar>
            <Title>Shopping cart</Title>
            {cartItems.length < 1 ? (
              <h3 style={{ marginBottom: "40px", color: "#7b7b7b" }}>
                No items in your cart
              </h3>
            ) : (
              cartItems
                .filter((item, idx) => idx < 3)
                .map((item, idx) => <CartProduct key={idx} item={item} />)
            )}

            <div onClick={hideSidebar}>
              <CustomLink
                path="/cart"
                title="view cart"
                backgroud="#e7e7e7"
                color="#000"
              />
            </div>
            <div onClick={hideSidebar}>
              <CustomLink
                path="/checkout"
                title="checkout"
                backgroud="#222529"
                color="#fff"
              />
            </div>

            <Close onClick={hideSidebar}>X</Close>
          </Sidebar>
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = ({ cartSidebar: { hidden }, cart: { cartItems } }) => ({
  hidden,
  cartItems,
});

const mapDispatchToProps = dispatch => ({
  hideSidebar: () => dispatch(togglecartSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
