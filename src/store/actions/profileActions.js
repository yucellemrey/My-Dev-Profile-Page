import axios from "axios";

export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    payload: profile,
  };
};

export const fetchProfile = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/profile")
      .then((res) => {
        dispatch(setProfile(res.data));
      })
      .catch((error) => {
        console.error("There was an error fetching the profile data!", error);
      });
  };
};
