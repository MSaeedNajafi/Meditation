import React, { useState } from "react";
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
} from "./AboutElements";
import img from "../../images/bg/bg1.jpg";

const AboutMe = () => {
  return (
    <>
      <Container>
        <AboutWrap>
          <Icon to="/">Meditation Fauzia</Icon>
          <AboutContent>
            <About>
              <AboutH1>About Me</AboutH1>
              <TextArea>
                <Text>
                  Hello, I am Fauzia and I am here to tell you about my self. I
                  have been doing meditation for more than 15 years.
                </Text>
                <ImgWrap>
                  <Img src={img} alt="me" />
                </ImgWrap>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </TextArea>
              <AboutButton to="/contact">Conact Me</AboutButton>
            </About>
          </AboutContent>
        </AboutWrap>
      </Container>
    </>
  );
};

export default AboutMe;
