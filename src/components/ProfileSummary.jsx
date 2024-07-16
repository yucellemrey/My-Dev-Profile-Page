import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import "../styles/profileSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

function ProfileSummary() {
  const { t } = useTranslation();

  const handleGitRedirect = () => {
    toast.info("Directing to Github!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      theme: "colored",
    });
    setTimeout(() => {
      window.location.href = "https://github.com/yucellemrey";
    }, 2500);
  };

  const handleLinkedinRedirect = () => {
    toast.info("Directing to Linkedin!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      theme: "colored",
    });
    setTimeout(() => {
      window.location.href = "https://www.linkedin.com/in/emreyucel1/";
    }, 2500);
  };

  return (
    <div className="profile-summary-container">
      <ToastContainer />
      <div>
        <Box display="flex" alignItems="center">
          <Divider
            sx={{
              width: "100px",
              borderBottomWidth: 1,
              marginRight: 1,
              borderColor: `var(--hero-name)`,
            }}
          />
          <Typography
            sx={{
              color: `var(--hero-name)`,
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "1.1em",
            }}
            variant="h6"
          >
            Emre Yücel
          </Typography>
        </Box>
        <h1 className="profile-summary-header">{t("profileSummary.title")}</h1>
        <p className="profile-summary-desc">
          {t("profileSummary.description")}
        </p>
        <div className="profile-summary-buttons">
          <button className="hire-me-button">
            {t("profileSummary.hire-me-button")}
          </button>
          <button onClick={handleGitRedirect} className="git-button">
            <FontAwesomeIcon icon={faGithub} /> Github
          </button>
          <button onClick={handleLinkedinRedirect} className="linkedin-button">
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </button>
        </div>
      </div>

      <img
        className="profile-summary-image"
        src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CJNRaSGk48~si16RcWLL4nceuwlrtthIVixPASE6MPh4tSMWblo6pLySnUS6tirrEbxDSOfA0pJlvpHnhrVJH1M3KwbKNvMBLwyIyLCATDXo2IQCYFh5AlDbwS4NFXbl8xn2wJXh0l2UIsBeEgyTWyGcEo6hxO3OA2FP~63IV7Jtea-OAmstPxlV7XuNDtWkyxxKkS5FHB7Bh46yI4kvVxTlyfdC0M6GosOM5jWmaZToBHH2qhD0yssjSeFNLcfnDJCZ8Q8lEaEFPeZx4bbfsxgslqmMWcq0m6mhI3fxjHOBkX3Yd4jpggamDiUxRUPAodqC34A4~MYmFAQGHjWSIg__"
        alt="Profile Picture"
      />
    </div>
  );
}

export default ProfileSummary;
