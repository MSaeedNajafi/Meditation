import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  RlogoWrap,
} from "./HeroElements";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElemts";
import rlogo from "../../images/rlogo.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <div style={{ border: " 10px solid #ffda6b", borderRadius: 5 }}>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </div>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Meditation with Fauzia
          {/* <span style={{ color: "#00c389" }}> */}
          {/* <RlogoWrap src={rlogo}></RlogoWrap>R */}
          {/* </span> */}
        </HeroH1>
        {/* <HeroP>You always remain in control of your funds.</HeroP> */}
        <HeroP>Really really Helpful.</HeroP>
        <HeroP>100% ontime</HeroP>

        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
