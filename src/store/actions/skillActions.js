import axios from "axios";

export const setSkills = (skills) => {
  return {
    type: "SET_SKILLS",
    payload: skills,
  };
};

export const fetchSkills = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/skills")
      .then((res) => {
        dispatch(setSkills(res.data));
      })
      .catch((error) => {
        console.error("There was an error fetching the skills data!", error);
      });
  };
};
