import "./styles/App.css";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";
import { fetchSkills } from "./store/actions/skillActions";
import { fetchProjects } from "./store/actions/projectActions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      <SkillList />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
