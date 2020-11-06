const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_CURRENT_USER") {
    return {
      ...state,
      currentUser: action.payload,
    };
  } else {
    return state;
  }
};

export default UserReducer;
