import React from "react";
import {
  MeditateContainer,
  MeditateH1,
  MeditateWrapper,
  MeditateCard,
  MeditateIcon,
  MeditateH2,
  MeditateP,
  MeditateDesc,
  MeditateBottomDesc,
  MeditateBottomH1,
} from "./HowToMeditate";
import Icon1 from "../../images/svg-9.svg";
import Icon2 from "../../images/svg-10.svg";
import Icon3 from "../../images/svg-15.svg";
import Icon4 from "../../images/svg-13.svg";
import Icon5 from "../../images/svg-14.svg";
import Icon6 from "../../images/svg-16.svg";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 800,
    marginBottom: 64,
    // backgroundColor: theme.palette.background.paper,
  },

  btm: {
    width: "100%",
    maxWidth: 800,
    marginTop: 64,
    marginBottom: 64,
    // backgroundColor: theme.palette.background.paper,
  },
}));

const MeditateElements = () => {
  const classes = useStyles();
  const [t, i18n] = useTranslation();
  return (
    <>
      <MeditateContainer id="how">
        <MeditateH1>{t("howto")}</MeditateH1>
        <MeditateDesc>{t("finda")}</MeditateDesc>
        {/* <Divider className={classes.root} /> */}

        <MeditateWrapper>
          <MeditateCard>
            <MeditateIcon src={Icon1} />
            <MeditateH2>{t("takeasit")}</MeditateH2>
            <MeditateP>{t("takeasittxt")}</MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon2} />
            <MeditateH2>{t("timelimit")}</MeditateH2>
            <MeditateP>{t("timelimittxt")}</MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon3} />
            <MeditateH2>{t("yourbreath")}</MeditateH2>
            <MeditateP>{t("yourbreathtxt")}</MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon4} />
            <MeditateH2>{t("thebody")}</MeditateH2>
            <MeditateP>{t("thebodytxt")}</MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon5} />
            <MeditateH2>{t("yourmind")}</MeditateH2>
            <MeditateP>{t("yourmindtxt")}</MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon6} />
            <MeditateH2>{t("withkindness")}</MeditateH2>
            <MeditateP>{t("withkindnesstxt")}</MeditateP>
          </MeditateCard>
        </MeditateWrapper>
        {/* <Divider className={classes.btm} /> */}
        <MeditateBottomDesc>{t("btmtxt")}</MeditateBottomDesc>
      </MeditateContainer>
    </>
  );
};

export default MeditateElements;
