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
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import img1 from "../../images/Slider/3.jpg";
import img2 from "../../images/Slider/2.jpg";
import img3 from "../../images/bg/bg1.jpg";

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
  const [t, i18n] = useTranslation();

  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>{t("practicemed")}</ServicesH1>
        <Divider className={classes.root} />
        <ServicesWrapper>
          <ServicesCard>
            <ServicesH2>{t("Concentration")}</ServicesH2>
            <ServicesIcon src={img1} />
            {/* <Divider className={classes.devider} /> */}
            <ServicesP>{t("focus")}</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesH2>{t("Observation")}</ServicesH2>
            <ServicesIcon src={img2} />
            {/* <Divider className={classes.devider} /> */}
            <ServicesP>
              {t("attention")}
              {/** , without allowing the attention to get
              stuck on any particular thing (open monitoring meditation) */}
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesH2>{t("awareness")}</ServicesH2>
            <ServicesIcon src={img3} />
            {/* <Divider className={classes.devider} /> */}
            <ServicesP>{t("allowawareness")}</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesElements;
