import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import COL from "./Colors";

export const Button = styled(LinkS)`
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
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : COL.btnInfoHoverColor)};
    color: ${({ dark }) =>
      dark ? COL.btnTextColor : COL.btnSecondaryTextColor};
  }
`;

export const ButtonR = styled(LinkR)`
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
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : COL.btnInfoHoverColor)};
    color: ${({ dark }) =>
      dark ? COL.btnTextColor : COL.btnSecondaryTextColor};
  }
`;

//
