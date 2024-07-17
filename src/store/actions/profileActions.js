import axios from "axios";
import data from "../../mockData/db.json";

export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    payload: profile,
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    const lang = localStorage.getItem("language");

    try {
      console.log("Posting data to API...");
      const postResponse = await axios.post(
        "https://reqres.in/api/workintech",
        data[lang]
      );

      console.log("Post response data:", postResponse.data);
      const result = postResponse.data;

      dispatch(setProfile(result.profile));
    } catch (error) {
      console.error("There was an error fetching the profile data!", error);
    }
  };
};
