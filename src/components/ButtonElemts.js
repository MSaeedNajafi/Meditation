import styled from "styled-components";
import { Link } from "react-scroll";
import COL from "./Colors";

export const Button = styled(Link)`
  border-radius: 5px;
  background: ${({ primary }) =>
    primary ? COL.btnPrimaryColor : COL.btnSecondaryColor};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? COL.btnSecondaryTextColor : COL.btnTextColor)};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : COL.btnInfoHoverColor)};
    color: ${({ dark }) =>
      dark ? COL.btnTextColor : COL.btnSecondaryTextColor};
  }
`;

//
