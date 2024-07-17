import axios from "axios";
import data from "../../mockData/db.json";

export const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    payload: projects,
  };
};

export const fetchProjects = () => {
  return async (dispatch) => {
    const lang = localStorage.getItem("language");
    console.log(lang);
    try {
      const postResponse = await axios.post(
        "https://reqres.in/api/workintech",
        data[lang]
      );

      const result = postResponse.data;

      dispatch(setProjects(result.projects));
    } catch (error) {
      console.error("There was an error fetching the projects data!", error);
    }
  };
};
