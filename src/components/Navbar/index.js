import react, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarCotainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLogoLink,
  Emoji,
  Atag,
} from "./NavbarElements";
import emo from "../../images/2724241120.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [changeNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarCotainer>
            <NavLogoLink to="/" onClick={toggleHome}>
              <Emoji src={emo} />
              Meditation
            </NavLogoLink>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Calculator
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="id2"
                  exact="true"
                  offset={-80}
                >
                  Server-Specs
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="id3"
                  exact="true"
                  offset={-80}
                >
                  Link 3
                </NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="services"
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLink>
              </NavItem> */}
              <NavBtn>
                <NavBtnLink
                  onClick={() => {
                    console.log("pressed");
                  }}
                  to="/contact"
                >
                  Contact Us
                </NavBtnLink>
              </NavBtn>
              <NavItem>
                <Atag href="https://explorer.radixdlt.com/#/validators/rv1qgfmskllt5lj2l2q2crgat6ml4t9u0n36phxevv3qy9yegxapdxnjgnqsuh">
                  Explorer
                </Atag>
              </NavItem>
            </NavMenu>
            {/* <NavBtn>
          <NavBtnLink to="/Link4">Click Here</NavBtnLink>
        </NavBtn> */}
          </NavBarCotainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
