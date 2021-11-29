import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  About,
  AboutContent,
  AboutH1,
  AboutWrap,
  Icon,
  Text,
  TextArea,
  ImgWrap,
  Img,
  AboutButton,
  SpanElem,
  TextOverImgWrapper,
  TextInWrapper,
  ImgOverText,
  Emoji,
} from "./AboutElements";
// import img from "../../images/bg/bg1.jpg";
import img from "../../images/self/aboutme.png";
import ChangLanguage from "../Navbar/ChangLanguage";
import en from "../../images/flags/en.png";
import nl from "../../images/flags/nl.png";

const AboutMe = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <Container>
        <AboutWrap>
          <AboutContent>
            <About>
              <AboutH1>{t("about")}</AboutH1>

              <TextOverImgWrapper>
                <ImgOverText src={img} alt="me" />
                <TextInWrapper>{t("abouttxt")}</TextInWrapper>
              </TextOverImgWrapper>
              <AboutButton to="/contact">{t("aboutbtn")}</AboutButton>
            </About>
          </AboutContent>
        </AboutWrap>
      </Container>
    </>
  );
};

export default AboutMe;
