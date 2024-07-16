import React from "react";
import "../styles/footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: `var(--footer-bg)`,
        width: "100vw",
      }}
    >
      <div className="footer-content">
        <h1 className="footer-title">{t("footer.header")}</h1>
        <div className="footer-mail-links">
          <a
            className="footer-mail"
            href="mailto:emreyucel97@outlook.com"
            data-cy="checkSendMail"
          >
            emreyucel97@outlook.com
          </a>
          <div className="footer-links">
            <a className="footer-link-blog" href="">
              {t("footer.blog")}
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
