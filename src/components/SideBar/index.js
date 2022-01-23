import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
  SideBarLinkRouter,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLinkRouter onClick={toggle} to="/about">
            About
          </SideBarLinkRouter>
          <SideBarLinkRouter onClick={toggle} to="/termsandconditions">
            Terms & Conditions
          </SideBarLinkRouter>
          {/* <SideBarLink onClick={toggle} to="id2">
            Page 2
          </SideBarLink>
          <SideBarLink onClick={toggle} to="id3">
            Page 3
          </SideBarLink> */}
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/contact">Contact Me</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
