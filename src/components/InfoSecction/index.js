import React from "react";
import { Button, ButtonR } from "../ButtonElemts";

import {
  InfoContainer,
  InfoWapper,
  InfoRow,
  Coulmn1,
  Coulmn2,
  TextWrapper,
  TopTitile,
  Title,
  Description,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import { useTranslation } from "react-i18next";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topTitle,
  lightText,
  title,
  darkText,
  decsription,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  goto,
}) => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWapper>
          <InfoRow imgStart={imgStart}>
            <Coulmn1>
              <TextWrapper>
                <TopTitile lightText={lightText}> {topTitle}</TopTitile>
                <Title lightText={lightText}>{title}</Title>
                <Description darkText={darkText}>{decsription}</Description>
                <BtnWrap>
                  {id == "id3" ? (
                    <>
                      <ButtonR
                        to="/contact"
                        smooth={true}
                        duartion={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </ButtonR>
                    </>
                  ) : (
                    <>
                      <Button
                        to={goto}
                        smooth={true}
                        duartion={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                    </>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Coulmn1>
            <Coulmn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Coulmn2>
          </InfoRow>
        </InfoWapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
