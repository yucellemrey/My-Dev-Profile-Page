import axios from "axios";
import data from "../../mockData/db.json";

export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    payload: profile,
  };
};

export const fetchProfile = () => {
  return (dispatch) => {
    const lang = localStorage.getItem("language");

    axios
      .post("https://reqres.in/api/users", data[lang])
      .then((response) => {
        console.log("Post response data:", response.data);
        const result = response.data;
        dispatch(setProfile(result.profile));
      })
      .catch((error) => {
        console.error("There was an error fetching the profile data!", error);
      });
  };
};
