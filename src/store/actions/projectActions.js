import axios from "axios";
import { data } from "../../mockData/data.js";

export const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    payload: projects,
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    const lang = localStorage.getItem("language");

    console.log(data);

    console.log("Posting projects data to API...");
    axios
      .post("https://reqres.in/api/users", data[lang])
      .then((response) => {
        console.log("Post response data for projects:", response.data);
        const result = response.data;
        dispatch(setProjects(result.projects));
      })
      .catch((error) => {
        console.error("There was an error fetching the projects data!", error);
      });
  };
};
