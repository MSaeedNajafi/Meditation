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
  SideBarLink,
} from "./SidebarElements";

import ChangLanguage from "../Navbar/ChangLanguage";
import en from "../../images/flags/en.png";
import nl from "../../images/flags/nl.png";

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
          <SideBarLink onClick={toggle} to="/">
            <ChangLanguage />
          </SideBarLink>
        </SideBarMenu>

        <SideBtnWrap>
          <SideBarRoute to="/contact">Contact Me</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default SideBar2;
