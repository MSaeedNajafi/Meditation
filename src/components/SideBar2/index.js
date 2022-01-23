import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLinkRouter,
  SideBtnWrap,
  SideBarRoute,
} from "./SidebarElements";

const SideBar2 = ({ isOpen, toggle }) => {
  console.log(isOpen);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLinkRouter onClick={toggle} to="/">
            Home
          </SideBarLinkRouter>
          <SideBarLinkRouter onClick={toggle} to="/about">
            About
          </SideBarLinkRouter>
          <SideBarLinkRouter onClick={toggle} to="/termsandconditions">
            Terms & Conditions
          </SideBarLinkRouter>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/contact">Contact Us</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default SideBar2;
