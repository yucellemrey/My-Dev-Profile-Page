import axios from "axios";

export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    payload: profile,
  };
};

export const fetchProfile = () => {
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
      console.log(result);

      dispatch(setProfile(result.profile));
    } catch (error) {
      console.error("There was an error fetching the profile data!", error);
    }
  };
};
