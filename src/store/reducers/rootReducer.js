import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import skillReducer from "./skillReducer";

const rootReducer = combineReducers({
  projects: projectReducer,
  skills: skillReducer,
});

export default rootReducer;
