import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/langSwitch.css";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div>
      {i18n.language === "en" ? (
        <a
          data-cy="checkSwitchToTr"
          className="lang-switch"
          onClick={() => changeLanguage("tr")}
        >
          {t("header.lang-switch-to-tr")}
          <span className="lang-switch-complementary">'ye Geç</span>
        </a>
      ) : (
        <a
          data-cy="checkSwitchToEn"
          className="lang-switch"
          onClick={() => changeLanguage("en")}
        >
          <span className="lang-switch-complementary">Switch to</span>{" "}
          {t("header.lang-switch-to-en")}
        </a>
      )}
    </div>
  );
}

export default LanguageSwitcher;
