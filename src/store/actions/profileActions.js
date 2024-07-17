import axios from "axios";
import { data } from "../../mockData/data.js";

export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    payload: profile,
  };
};

export const fetchProfile = () => {
  return (dispatch) => {
    const lang = localStorage.getItem("language");

    console.log(data);

    console.log("Posting data to API...");
    axios
      .post("https://reqres.in/api/users", data[lang])
      .then((response) => {
        console.log("Post response data:", response.data);
        const result = response.data;
        dispatch(setProfile(result));
      })
      .catch((error) => {
        console.error("There was an error fetching the profile data!", error);
      });
  };
};
