import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #302e2a82;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
export const Sidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 300px;
  z-index: 9999;
  background-color: #fff;
  padding: 20px;
`;

export const Title = styled.h3`
  color: #000;
  margin-bottom: 30px;
`;

export const Close = styled.div`
  color: #fff;
  position: absolute;
  top: 15px;
  left: -30px;
  cursor: pointer;
`;
