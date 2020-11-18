import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #c7c7c7;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const Price = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export const ProductImgWrapper = styled.div`
  position: relative;
`;

export const ProductImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const RemoveItem = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  background-color: #fff;
  color: red;
  font-size: 10px;
  font-weight: 400;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 6px 2px #808080;
`;
