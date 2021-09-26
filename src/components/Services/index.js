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
import img1 from "../../images/Slider/3.jpg";
import img2 from "../../images/Slider/2.jpg";
import img3 from "../../images/bg/bg1.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 800,
    marginBottom: 64,
    // backgroundColor: theme.palette.background.paper,
  },

  devider: {
    width: "100%",
    maxWidth: 400,
    marginBottom: 15,
    marginTop: 15,
    // backgroundColor: theme.palette.background.paper,
  },
}));

const ServicesElements = () => {
  const classes = useStyles();
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Meditation is practiced in the following ways</ServicesH1>
        <Divider className={classes.root} />
        <ServicesWrapper>
          <ServicesCard>
            <ServicesH2>Concentration</ServicesH2>
            <ServicesIcon src={img1} />
            {/* <Divider className={classes.devider} /> */}
            <ServicesP>
              focusing attention on a single object, internal or external
              (focused attention meditation)
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesH2>Observation</ServicesH2>
            <ServicesIcon src={img2} />
            {/* <Divider className={classes.devider} /> */}
            <ServicesP>
              paying attention to whatever is predominant in your experience in
              the present moment
              {/** , without allowing the attention to get
              stuck on any particular thing (open monitoring meditation) */}
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesH2>Awareness</ServicesH2>
            <ServicesIcon src={img3} />
            {/* <Divider className={classes.devider} /> */}
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
