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
      <MeditateContainer id="Meditate">
        <MeditateH1>{t("howto")}</MeditateH1>
        <MeditateDesc>
          Find A place to sit that feels calm and quiet to you.
        </MeditateDesc>
        <Divider className={classes.root} />

        <MeditateWrapper>
          <MeditateCard>
            <MeditateIcon src={Icon1} />
            <MeditateH2>1. Take a seat</MeditateH2>
            <MeditateP>
              You can sit in a chair with your feet on the floor, make sure you
              are in a comfortable position that you can stay in for a while.
            </MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon2} />
            <MeditateH2>2. Set a time limit</MeditateH2>
            <MeditateP>
              If you’re just beginning, it can help to choose a short time, such
              as five or 10 minutes.
            </MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon3} />
            <MeditateH2>3. Feel your breath</MeditateH2>
            <MeditateP>
              Follow the sensation of your breath as it goes in and as it goes
              out.
            </MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon4} />
            <MeditateH2>4. Notice the body</MeditateH2>
            <MeditateP>
              Feel the feet on the floor, be aware of sensations, lets the
              thoughts come and go as they will.
            </MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon5} />
            <MeditateH2>5. Be kind to your mind</MeditateH2>
            <MeditateP>
              Don’t judge yourself or obsess over the content of the thoughts
              you find yourself lost in. Just come back.
            </MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon6} />
            <MeditateH2>6. Close with kindness</MeditateH2>
            <MeditateP>
              When you’re ready, open your eyes. Notice how your body feels.
              Notice your thoughts and emotions. Thank yourself for allowing
              awareness into your life.
            </MeditateP>
          </MeditateCard>
        </MeditateWrapper>
        <Divider className={classes.btm} />
        <MeditateBottomDesc>
          Meditation is no more complicated than what is described above. It is
          that simple … and that challenging. It’s also powerful and worth it.
          The key is to commit to sit even if it is for a few minutes a day and
          build up from there.
        </MeditateBottomDesc>
      </MeditateContainer>
    </>
  );
};

export default MeditateElements;
