import "./styles/App.css";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <SkillList />
        <ProjectList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
