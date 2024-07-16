import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import tr from "./lang//tr.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: savedLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
