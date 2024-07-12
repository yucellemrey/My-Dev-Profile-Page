import "./styles/App.css";
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

function App() {
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
        sx={{ borderBottomWidth: 2, width: "85%", margin: "0 auto" }}
      ></Divider>
      <ProfilePitch />
      <Divider
        sx={{ borderBottomWidth: 2, width: "85%", margin: "0 auto" }}
      ></Divider>
      <section id="projects">
        <ProjectList />
      </section>
      <Footer />
    </div>
  );
}

export default App;
