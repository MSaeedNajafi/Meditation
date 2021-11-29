import { useTranslation } from "react-i18next";

import { Emoji } from "./NavbarElements";
import en from "../../images/flags/en.png";
import nl from "../../images/flags/nl.png";

const ChangLanguage = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <div style={{ paddingLeft: 5 }}>
        <Emoji onClick={() => i18n.changeLanguage("nl")} src={nl} />
        <Emoji onClick={() => i18n.changeLanguage("en")} src={en} />
      </div>
    </>
  );
};

export default ChangLanguage;
