import axios from "axios";

export const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    payload: projects,
  };
};

export const fetchProjects = () => {
  return async (dispatch) => {
    const lang = localStorage.getItem("language");

    const response = await axios.get("/db.json");
    const data = response.data;

    console.log(response.data);
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
