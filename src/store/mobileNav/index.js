const initialState = {
  active: "overview",
};

export const SET_ACTIVE = "SET_ACTIVE";

function MobileNavReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
}

export default MobileNavReducer;
