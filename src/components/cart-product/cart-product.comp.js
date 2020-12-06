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
          <RemoveItem>X</RemoveItem>
        </ProductImgWrapper>
      </Wrapper>
    </>
  );
};

export default CartProduct;
