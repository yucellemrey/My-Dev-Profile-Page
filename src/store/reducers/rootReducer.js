import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import skillReducer from "./skillReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  projects: projectReducer,
  skills: skillReducer,
  profile: profileReducer,
});

export default rootReducer;
