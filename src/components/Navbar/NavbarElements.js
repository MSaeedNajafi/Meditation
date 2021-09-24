import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import COL from "../Colors";
import img from "../../images/bg images/bg3.jpg";

export const Nav = styled.nav`
  background: ${COL.navBackgroundColor};
  //background: ${({ scrollNav }) =>
    scrollNav ? COL.navBackgroundColor : COL.navBackgroundColor};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
  z-index: 10;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  // background-image: url(${img});
  // background-repeat: repeat-x;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 50px;
  max-width: 1500px;
`;

export const NavLogo = styled(LinkR)`
  color: ${COL.logoTextColor};
  justify-self: flex-start;
  display: flex;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    // top: 0;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${COL.iconColro};
  }
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${COL.navBackgroundColor};

  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${COL.iconColro};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  tetx-align: center;
  // margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100px;
`;

export const NavLogoLink = styled(LinkS)`
  color: ${COL.logoTextColor};
  justify-self: flex-start;
  display: flex;
  cursor: pointer;
  font-size: 30px;
  align-items: center;
  // margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  // text-decoration: underline;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-left: 0;
  }
`;

export const NavLink = styled(LinkS)`
  color: ${COL.navLinkTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18px;
  // font-weight: 600;
  &.active {
    border-bottom: 3px solid ${COL.activeColor};
  }
`;

export const NavLinkTo = styled(LinkR)`
  color: ${COL.navLinkTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18px;
  // font-weight: 600;
  &.active {
    border-bottom: 3px solid ${COL.activeColor};
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  // margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 5px;
  background: ${COL.btnPrimaryColor};
  white-space: nowarp;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  // margin-left: 24px;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${COL.btnHoverColor};
    color: ${COL.btnNavTextColor};
  }
`;

export const Emoji = styled.img`
  width: 50px;
  height: 40px;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 25px;
    margin-right: 5px;
  }
`;

export const Atag = styled.a`
  color: ${COL.navLinkTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${COL.activeColor};
  }
`;
