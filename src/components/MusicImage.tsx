// eslint-disable-next-line
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

import headphone from "../images/Headphone.jpg";

export const MusicImage = styled.img.attrs({
  src: headphone,
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1px;
`;
