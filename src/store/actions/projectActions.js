import axios from "axios";

export const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    payload: projects,
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/projects")
      .then((res) => {
        dispatch(setProjects(res.data));
      })
      .catch((error) => {
        console.error("There was an error fetching the projects data!", error);
      });
  };
};
