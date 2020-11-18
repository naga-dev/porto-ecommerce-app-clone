import styled, { css } from "styled-components";

const TitleStyle = css`
  color: #000;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export const LeftSideTitle = styled.h3``;

export const RightSideTitle = styled.h3`
  color: #000;
  margin-bottom: 20px;
`;

export const SideTitle = styled.h3`
  ${TitleStyle}
`;

export const CartTotal = styled.h4`
  color: #000;
`;
