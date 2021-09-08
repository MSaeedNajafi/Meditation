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
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="home">
            Calculator
          </SideBarLink>
          <SideBarLink onClick={toggle} to="about">
            Server-Specs
          </SideBarLink>
          {/* <SideBarLink onClick={toggle} to="id2">
            Page 2
          </SideBarLink>
          <SideBarLink onClick={toggle} to="id3">
            Page 3
          </SideBarLink> */}
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/contact">Contact Us</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
