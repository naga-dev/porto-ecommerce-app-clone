import React from "react";

import Img from "../../assets/images/category-item-1.jpg";

import {
  Content,
  Price,
  Wrapper,
  Title,
  ProductImgWrapper,
  ProductImg,
  RemoveItem,
} from "./cart-product.styles";

const CartProduct = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Title>Men Cap - Indigo, Extra Large </Title>
          <Price>3 X $100.00</Price>
        </Content>

        <ProductImgWrapper>
          <ProductImg src={Img} />
          <RemoveItem>X</RemoveItem>
        </ProductImgWrapper>
      </Wrapper>
    </>
  );
};

export default CartProduct;
