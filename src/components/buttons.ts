import styled from "styled-components";

interface Props {
  disable?: boolean;
  simple?: boolean;
}

export const Button = styled.button.attrs(() => ({
  className: "btn",
  type: "submit",
}))<Props>`
  border-color: black;
  border-width: 1px;
  ${({ simple }) => {
    if (simple) {
      return "background-color: transparent;";
    } else {
      return "background-color: #6e749c;";
    }
    // simple ? "background-color: transparent;" : "background-color: orange;";
  }}
  ${({ disable }) => (disable ? "opacity: .5;" : "")};
`;

export const ButtonLarge = styled(Button)`
  width: 100%;
`;
