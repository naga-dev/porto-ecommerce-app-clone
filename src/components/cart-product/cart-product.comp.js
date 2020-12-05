import React from "react";

import {
  Content,
  Price,
  Wrapper,
  Title,
  ProductImgWrapper,
  ProductImg,
  RemoveItem,
} from "./cart-product.styles";

const CartProduct = ({ item }) => {
  const { productName, price, imgUrl } = item;

  return (
    <>
      <Wrapper>
        <Content>
          <Title>{productName}</Title>
          <Price>3 X ${price}</Price>
        </Content>

        <ProductImgWrapper>
          <ProductImg src={imgUrl} />
          <RemoveItem>X</RemoveItem>
        </ProductImgWrapper>
      </Wrapper>
    </>
  );
};

export default CartProduct;
