const initialState = {
  active: "Overview",
  previous: "",
};

export const SET_ACTIVE = "SET_ACTIVE";

function MobileNavReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        active: action.payload.active,
        previous: action.payload.previous,
      };
    default:
      return state;
  }
}

export default MobileNavReducer;
