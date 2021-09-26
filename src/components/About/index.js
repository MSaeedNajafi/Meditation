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
  SpanElem,
} from "./AboutElements";
import img from "../../images/bg/bg1.jpg";

const AboutMe = () => {
  return (
    <>
      <Container>
        <AboutWrap>
          <Icon to="/">
            Meditation <SpanElem> with</SpanElem> Fauzia
          </Icon>
          <AboutContent>
            <About>
              <AboutH1>About Me</AboutH1>
              <TextArea>
                <Text>
                  Hello dear friend, my name is Fauzia and together with you I
                  want to explore the light in ourselves. My intention is to
                  offer you support while you develop this inner source of
                  resilience and learn how to be confident, comfortable and
                  balanced in career and personal relationships. Especially the
                  relationship with yourself. From here you are able to enjoy
                  the most fulfilled life.
                </Text>
                <ImgWrap>
                  <Img src={img} alt="me" />
                </ImgWrap>
                <Text>
                  My spiritual journey started over 20 years ago with study of
                  inherent wisdom and truth from great minds such as Plato,
                  Marcus Aurelius, Buddha, Marsilio Ficino, James Allen and
                  more, so that I could embody the universal message they all
                  convey.
                </Text>
                <Text>
                  By practicing Yoga, meditation and study I stay connected to
                  my inner self, and have pieced together my life’s puzzle and
                  accept and appreciate the joyful person I am today. I believe
                  passionately that meditation should be practiced in everyday
                  life, everywhere around the world, because only by accepting
                  and appreciating ourselves can we truly understand and help
                  others.
                </Text>
              </TextArea>
              <AboutButton to="/contact">Want to know more?</AboutButton>
            </About>
          </AboutContent>
        </AboutWrap>
      </Container>
    </>
  );
};

export default AboutMe;
