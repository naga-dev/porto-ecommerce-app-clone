import React from "react";
import CartProduct from "../cart-product/cart-product.comp";
import { Close, Sidebar, Title, Wrapper } from "./cart-sidebar.styles";

import { connect } from "react-redux";
import { togglecartSidebar } from "../../redux/cart-menu/cart-sidebar.actions";
import CustomLink from "../custom-link/custom-link.comp";

const CartSidebar = ({ hideSidebar, hidden }) => {
  return (
    <>
      {hidden && (
        <Wrapper>
          <Sidebar>
            <Title>Shopping cart</Title>
            <CartProduct />

            <div onClick={hideSidebar}>
              <CustomLink path="/cart" title="view cart" backgroud="#e7e7e7" color="#000" />
            </div>
            <div onClick={hideSidebar}>
              <CustomLink path="/checkout" title="checkout" backgroud="#222529" color="#fff" />
            </div>

            <Close onClick={hideSidebar}>X</Close>
          </Sidebar>
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = ({ cartSidebar: { hidden } }) => ({
  hidden,
});

const mapDispatchToProps = dispatch => ({
  hideSidebar: () => dispatch(togglecartSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
