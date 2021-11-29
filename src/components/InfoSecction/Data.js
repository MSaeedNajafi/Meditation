import img1 from "../../images/self/sitting.jpg";
import img4 from "../../images/svg-17.svg";
import img7 from "../../images/Slider/2.jpg";

export const HomeObjOne = {
  id: "about",
  lightBg: false,
  lightText: false,
  lightTextDecs: true,
  topTitle: "",
  title: "What is Meditation?",
  decsription:
    "Originally, the word “meditate” meant to think deeply about something. However, when eastern contemplative practices were “imported” to western culture, this is the term that was used to define them, for lack of a better word. Nowadays meditation refers more to the exercise of focusing attention than to reflecting deeply. Meditation is a mental exercise that involves relaxation, focus, and awareness. Meditation is to the mind what physical exercise is to the body. The practice is usually done individually, in a still, seated position and with eyes closed.",
  buttonLabel: "Why to Meditate?",
  imgStart: false,
  img: img1,
  alt: "Mediatation",
  dark: true,
  primary: true,
  darkText: true,
  goto: "id2",
};

export const HomeObjTwo = {
  id: "id2",
  lightBg: true,
  lightText: true,
  lightTextDecs: true,
  topTitle: "",
  title: "Why Meditate? ",
  decsription:
    "When we meditate, we inject far-reaching and long-lasting benefits into our lives. We increase awareness and reduce brain chatter. We lower our stress levels, we improve our focus, we get to know our pain and the healing process may begin. We connect and we are kinder to ourselves. Sounds good right? ",
  buttonLabel: "Learn More",
  imgStart: true,
  img: img7,
  alt: "Bank",
  dark: true,
  primary: true,
  darkText: false,
  goto: "id3",
};

export const HomeObjThree = {
  id: "how",
  lightBg: false,
  lightText: false,
  lightTextDecs: true,
  topTitle: "",
  title: "Start meditation and stick with it",
  decsription:
    "I invite you to join me in a guided meditation session. You will be guided through a 45 minute meditation. Follow the link to book online, either in a group or a private session. The session is for all ages and all experience levels. Need more information?",
  buttonLabel: "Contact Me",
  imgStart: false,
  img: img4,
  alt: "Mediatation",
  dark: true,
  primary: true,
  darkText: true,
  goto: "about",
};
