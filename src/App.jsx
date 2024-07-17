import "./styles/App.css";
import "./styles/themes.css";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";
import { fetchSkills } from "./store/actions/skillActions";
import { fetchProjects } from "./store/actions/projectActions";
import { useEffect } from "react";
import Divider from "@mui/material/Divider";
import ProfilePitch from "./components/ProfilePitch";
import Header from "./components/Header";
import ProfileSummary from "./components/ProfileSummary";
import { fetchProfile } from "./store/actions/profileActions";
import { ThemeProvider } from "./ThemeContext.jsx";

function App() {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchProjects());
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ProfileSummary />
      <section id="skills">
        <SkillList />
      </section>
      <Divider
        sx={{
          borderBottomWidth: 1,
          width: "85%",
          margin: "0 auto",
          borderColor: `var(--divider-color)`,
        }}
      ></Divider>
      <ProfilePitch />
      <Divider
        sx={{
          borderBottomWidth: 1,
          width: "85%",
          margin: "0 auto",
          borderColor: `var(--divider-color)`,
        }}
      ></Divider>
      <section id="projects">
        <ProjectList />
      </section>
      <Footer />
    </div>
  );
}

const WrappedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
