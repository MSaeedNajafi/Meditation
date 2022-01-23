import react, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
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
  TopNav,
  NavLinkTo,
  SpanElem,
} from "./NavbarElements";
import ChangLanguage from "./ChangLanguage";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [t, i18n] = useTranslation();

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
        {/* <TopNav>dsda</TopNav> */}
        <Nav scrollNav={scrollNav}>
          <NavBarCotainer>
            <NavLogoLink to="/" onClick={toggleHome}>
              Meditation<SpanElem> with </SpanElem>Fauzia
            </NavLogoLink>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinkTo to="/about">{t("About-Me")}</NavLinkTo>
              </NavItem>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  {t("Whatt")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="id2"
                  exact="true"
                  offset={-100}
                >
                  {t("Whyy")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="how"
                  exact="true"
                  offset={-100}
                >
                  {t("how=")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="pricing"
                  exact="true"
                  offset={-100}
                >
                  {t("prices=")}
                </NavLink>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink
                onClick={() => {
                  console.log("pressed");
                }}
                to="/contact"
              >
                {t("ccccccc")}
              </NavBtnLink>
              <ChangLanguage />
              {/* <div style={{ paddingLeft: 5 }}>
                <Emoji onClick={() => i18n.changeLanguage("nl")} src={nl} />
                <Emoji onClick={() => i18n.changeLanguage("en")} src={en} />
              </div> */}
            </NavBtn>
          </NavBarCotainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
