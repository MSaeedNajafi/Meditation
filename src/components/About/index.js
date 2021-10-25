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
  TextOverImgWrapper,
  TextInWrapper,
  ImgOverText,
} from "./AboutElements";
// import img from "../../images/bg/bg1.jpg";
import img from "../../images/self/aboutme.png";

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
              <AboutH1>Even voorstellen</AboutH1>
              {/* <TextArea>
                <ImgWrap>
                  <Img src={img} alt="me" />
                </ImgWrap>
                <Text>
                  Hallo vriend(in), mijn naam is Fauzia en samen met jou wil ik
                  de spirituele energie in ons gaan verkennen. Mijn intentie is
                  om je te ondersteunen bij het ontwikkelen van je innerlijke
                  bron. En je te helpen hoe je vol met zelfvertrouwen,
                  comfortabel en gebalanceerd je relaties op persoonlijk en
                  zakelijk gebied kan ontwikkelen.
                </Text>

                <Text>
                  Mijn spirituele reis begon 20 jaar geleden. Door de werken van
                  filosofen zoals Plato, Marcus Aurelius, Boeddha, Marsilio
                  Ficino, James Allen en andere wijsgeren te bestuderen heb ik
                  de universele boodschap die ze allemaal doorgeven kunnen
                  omarmen. Ik heb door het in praktijk brengen van meditatie,
                  yoga en studie de puzzelstukjes van mijn leven kunnen
                  samenvoegen.
                </Text>
                <Text>
                  Het aanvaarden van wie ik ben maakt van mij een dankbaar mens
                  die geleerd heeft het leven te leven zoals het is. Ik ben
                  ervan overtuigd dat mediteren, voor iedereen, overal ter
                  wereld, een geschenk kan zijn als men dit (dagelijks) in
                  praktijk zou brengen. Omdat alleen door onszelf te accepteren
                  en waarderen kunnen we begrip opbrengen voor iedereen en de
                  wereld verder helpen.
                </Text>
              </TextArea> */}

              <TextOverImgWrapper>
                <ImgOverText src={img} alt="me" />
                <TextInWrapper>
                  Hallo vriend(in), mijn naam is Fauzia en samen met jou wil ik
                  de spirituele energie in ons gaan verkennen. Mijn intentie is
                  om je te ondersteunen bij het ontwikkelen van je innerlijke
                  bron. En je te helpen hoe je vol met zelfvertrouwen,
                  comfortabel en gebalanceerd je relaties op persoonlijk en
                  zakelijk gebied kan ontwikkelen. Mijn spirituele reis begon 20
                  jaar geleden. Door de werken van filosofen zoals Plato, Marcus
                  Aurelius, Boeddha, Marsilio Ficino, James Allen en andere
                  wijsgeren te bestuderen heb ik de universele boodschap die ze
                  allemaal doorgeven kunnen omarmen. Ik heb door het in praktijk
                  brengen van meditatie, yoga en studie de puzzelstukjes van
                  mijn leven kunnen samenvoegen. Het aanvaarden van wie ik ben
                  maakt van mij een dankbaar mens die geleerd heeft het leven te
                  leven zoals het is. Ik ben ervan overtuigd dat mediteren, voor
                  iedereen, overal ter wereld, een geschenk kan zijn als men dit
                  (dagelijks) in praktijk zou brengen. Omdat alleen door onszelf
                  te accepteren en waarderen kunnen we begrip opbrengen voor
                  iedereen en de wereld verder helpen.
                </TextInWrapper>
              </TextOverImgWrapper>
              <AboutButton to="/contact">Wil je meer weten?</AboutButton>
            </About>
          </AboutContent>
        </AboutWrap>
      </Container>
    </>
  );
};

export default AboutMe;
