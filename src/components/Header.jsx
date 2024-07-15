import React, { useContext } from "react";
import "../styles/header.css";
import ellipse from "../assets/Ellipse 9.png";
import { Link } from "react-scroll";
import { ThemeContext } from "../ThemeContext.jsx";

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="header-container">
      <div>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
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
