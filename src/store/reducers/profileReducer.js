const initialState = {
  profile: {},
  loading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_PROFILE_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
