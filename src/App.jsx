import "./App.css";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProjectList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
