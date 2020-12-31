import styled from "styled-components";

export const HeaderLogo = styled.img.attrs({
  src: "./images/logo.png",
})`
  display: flex;
  flex-direction: rows;
  width: 400px;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
`;

export default HeaderLogo;
