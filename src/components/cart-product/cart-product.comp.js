import React from "react";

// Redux
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/shopping-cart/shopping-cart.actions";

import {
  Content,
  Price,
  Wrapper,
  Title,
  ProductImgWrapper,
  ProductImg,
  RemoveItem,
} from "./cart-product.styles";

const CartProduct = ({ item, clearItemFromCart }) => {
  const { productName, price, imgUrl, quantity } = item;

  return (
    <>
      <Wrapper>
        <Content>
          <Title>{productName}</Title>
          <Price>
            {quantity} X ${price}
          </Price>
        </Content>

        <ProductImgWrapper>
          <ProductImg src={imgUrl} />
          <RemoveItem onClick={() => clearItemFromCart(item)}>X</RemoveItem>
        </ProductImgWrapper>
      </Wrapper>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartProduct);
