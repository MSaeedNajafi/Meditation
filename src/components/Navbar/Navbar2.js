import react, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  Nav2,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarCotainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLogoLinkNew,
  Emoji,
  Atag,
  TopNav,
  NavLinkTo,
  SpanElem,
} from "./NavbarElements";
import ChangLanguage from "./ChangLanguage";
import en from "../../images/flags/en.png";
import nl from "../../images/flags/nl.png";

const Navbar2 = ({ toggle }) => {
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
        <Nav2 scrollNav={scrollNav}>
          <NavBarCotainer>
            <NavLogoLinkNew to="/" onClick={toggleHome}>
              Meditation<SpanElem> with </SpanElem>Fauzia
            </NavLogoLinkNew>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

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
            </NavBtn>
          </NavBarCotainer>
        </Nav2>
      </IconContext.Provider>
    </>
  );
};

export default Navbar2;
