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
        <ServicesH1>Meditation is practiced in one of three modes:</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Concentration</ServicesH2>
            <ServicesP>
              focusing attention on a single object, internal or external
              (focused attention meditation)
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Observation</ServicesH2>
            <ServicesP>
              paying attention to whatever is predominant in your experience in
              the present moment
              {/** , without allowing the attention to get
              stuck on any particular thing (open monitoring meditation) */}
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Awareness</ServicesH2>
            <ServicesP>
              allowing awareness to remain present, undistracted and not engaged
              with either focusing or observing
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesElements;
