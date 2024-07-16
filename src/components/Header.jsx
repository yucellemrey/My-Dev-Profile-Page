import React, { useContext } from "react";
import "../styles/header.css";
import ellipse from "../assets/Ellipse 9.png";
import ellipseDark from "../assets/Ellipse 9 dark.png";
import { Link } from "react-scroll";
import { ThemeContext } from "../ThemeContext.jsx";
import "../styles/themes.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  return (
    <div className="header-container">
      <div className="header-top">
        <button className="lang-switch-button" onClick={toggleTheme}>
          {theme === "dark"
            ? t("header.theme-to-light")
            : t("header.theme-to-dark")}
        </button>
        <span>|</span>
        <LanguageSwitcher />
      </div>
      <div className="header-low">
        <div className="initials-container">
          <img
            src={theme === "dark" ? ellipseDark : ellipse}
            alt=""
            className="initials-image"
          />
          <span className="initials-text">E</span>
        </div>
        <nav className="top-nav-menu">
          <Link
            className="top-nav-links"
            to="skills"
            smooth={true}
            duration={300}
          >
            {t("header.nav1")}
          </Link>
          <Link
            data-cy="projectsTest"
            className="top-nav-links"
            to="projects"
            smooth={true}
            duration={500}
          >
            {t("header.nav2")}
          </Link>
          <button className="h-hire-me-button">
            {t("header.hire-me-button")}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
