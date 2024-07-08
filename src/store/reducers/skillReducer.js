import skillsData from "../../skills";

const initialState = { skills: skillsData };

const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SKILLS":
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};

export default skillReducer;
