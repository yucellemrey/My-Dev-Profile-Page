import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: `var(--footer-bg)`,
        width: "1280px",
        marginLeft: "-20px",
      }}
    >
      <div className="footer-content">
        <h1 className="footer-title">
          Let’s work together on your next product.
        </h1>
        <div className="footer-mail-links">
          <a className="footer-mail" href="mailto:emreyucel97@outlook.com">
            emreyucel97@outlook.com
          </a>
          <div className="footer-links">
            <a className="footer-link-blog" href="">
              Personal Blog
            </a>
            <a
              className="footer-link-git"
              href="https://github.com/yucellemrey"
            >
              Github
            </a>
            <a
              className="footer-link-linkedin"
              href="https://www.linkedin.com/in/emreyucel1/"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
