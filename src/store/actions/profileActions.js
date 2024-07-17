import axios from "axios";
import data from "../../mockData/db.json";

export const setProfile = (profile) => ({
  type: "SET_PROFILE",
  payload: profile,
});

export const setProfileLoading = (isLoading) => ({
  type: "SET_PROFILE_LOADING",
  payload: isLoading,
});

export const fetchProfile = () => {
  return async (dispatch) => {
    dispatch(setProfileLoading(true));

    const lang = localStorage.getItem("language");

    try {
      const postResponse = await axios.post(
        "https://reqres.in/api/workintech",
        data[lang]
      );

      const result = postResponse.data;

      dispatch(setProfile(result.profile));
    } catch (error) {
      console.error("There was an error fetching the profile data!", error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};
