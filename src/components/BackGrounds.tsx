// eslint-disable-next-line
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

import sky from "../images/sky.jpg";

export const SkyBackground = styled.img.attrs({
  src: sky,
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const LayoutDiv = styled.div`
  height: 250px;
  display: grid;
  padding: 5px;
  grid-template-rows: 20% 60% 20%;
  background-color: black;

  & .header {
    background-color: red;
  }
  & .content {
    background-color: blue;
  }
  & .sider {
    background-color: yellow;
  }
  & .footer {
    background-color: green;
  }
`;
export const PlayerDiv = styled.div`
  & .play-button {
    padding: 100px; // parei aqui
  }
`;
