import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";
// const server = "https://iamsaeed-1366.web.app/";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
//        loadPath: server + "/locals/{{lng}}/{{ns}}",
//        loadPath: "http://localhost:3000/locals/{{lng}}/{{ns}}",

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      backend: {
        loadPath: "http://localhost:3000/locals/{{lng}}/{{ns}}",
        allowMultiLoading: false,
        crossDomain: true,
      },
      lng: "nl",
      fallbackLng: "nl",
      debug: false,
      detection: {
        order: ["queryString", "cookie"],
        cache: ["cookie"],
      },
      interpolation: {
        escapeValue: false,
      },
    },
    (error, t) => {
      if (error) console.log(error);
    }
  );

export default i18n;
