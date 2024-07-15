import React from "react";
import "../styles/header.css";
import ellipse from "../assets/Ellipse 9.png";
import { Link } from "react-scroll";
import darkMode from "../assets/Night Mode.png";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header-container">
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
      <div className="header-low">
        <div className="initials-container">
          <img src={ellipse} alt="" className="initials-image" />
          <span className="initials-text">E</span>
        </div>
        <nav className="top-nav-menu">
          <Link
            className="top-nav-links"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="top-nav-links"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <button className="h-hire-me-button">Hire me</button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
