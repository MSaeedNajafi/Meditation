import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";

const ServicesElements = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Validating Transtions</ServicesH2>
            <ServicesP>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Get Rewards</ServicesH2>
            <ServicesP>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Increase Profit</ServicesH2>
            <ServicesP>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesElements;
