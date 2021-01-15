// eslint-disable-next-line
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

import headphone from "../images/Headphone.jpg";

export const Headphone = styled.img.attrs({
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

export const LayoutDiv = styled.div`
  height: 300px;
  display: grid;
  padding: 5px;
  grid-template-rows: 23% 60% 17%;
  background-color: black;

  & .header {
    background-color: red;
    display: flex;
    text-align: center;
  }
  & .menu {
  }
  & .content {
    background-color: blue;
  }
  & .sider {
    background-color: yellow;
  }
  & .footer-content {
    display: flex;
    align-content: end;
    background-color: green;
  }
  & .btn {
    color: white;
    position: relative;
    display: flex;
    margin: 5px 28px 10px;
  }
`;
