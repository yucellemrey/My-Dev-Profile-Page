import axios from "axios";

export const setSkills = (skills) => {
  return {
    type: "SET_SKILLS",
    payload: skills,
  };
};

export const fetchSkills = () => {
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

      dispatch(setSkills(result.skills));
    } catch (error) {
      console.error("There was an error fetching the skills data!", error);
    }
  };
};
