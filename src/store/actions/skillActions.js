import axios from "axios";
import { data } from "../../mockData/data.js";

export const setSkills = (skills) => {
  return {
    type: "SET_SKILLS",
    payload: skills,
  };
};

export const fetchSkills = () => {
  return (dispatch) => {
    const lang = localStorage.getItem("language");

    console.log(data);

    console.log("Posting skills data to API...");
    axios
      .post("https://reqres.in/api/users", data[lang])
      .then((response) => {
        console.log("Post response data for skills:", response.data);
        const result = response.data;
        dispatch(setSkills(result.skills));
      })
      .catch((error) => {
        console.error("There was an error fetching the skills data!", error);
      });
  };
};
