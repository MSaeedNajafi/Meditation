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

const MeditateElements = () => {
  return (
    <>
      <MeditateContainer id="Meditate">
        <MeditateH1>How to meditate?</MeditateH1>
        <MeditateDesc>
          Find place to sit that feels calm and quiet to you.
        </MeditateDesc>

        <MeditateWrapper>
          <MeditateCard>
            <MeditateIcon src={Icon1} />
            <MeditateH2>1. Take a sit</MeditateH2>
            <MeditateP>
              focusing attention on a single object, internal or external
              (focused attention meditation)
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
            <MeditateH2>3. Notice your body</MeditateH2>
            <MeditateP>
              You can sit in a chair with your feet on the floor, make sure you
              are in a comfortable position that you can stay in for a while.
            </MeditateP>
          </MeditateCard>
          <MeditateCard>
            <MeditateIcon src={Icon4} />
            <MeditateH2>4. Feel your breath</MeditateH2>
            <MeditateP>
              Follow the sensation of your breath as it goes in and as it goes
              out.
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
              When you’re ready, open your eyrs. Take a moment and notice any
              sounds in the environment. Notice how your body feels and on your
              thoughts and emotions.
            </MeditateP>
          </MeditateCard>
        </MeditateWrapper>
        <MeditateBottomH1>This is it!</MeditateBottomH1>
        <MeditateBottomDesc>
          Meditation is no more complicated than what is described above. It is
          that simple … and that challenging. It’s also powerful and worth it.
          The key is to commit to sit even if it is for a few minutes a day and
          then build up from there.
        </MeditateBottomDesc>
      </MeditateContainer>
    </>
  );
};

export default MeditateElements;
