const initialState = { darkTheme: true };

export const SET_THEME = "SET_THEME";

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        darkTheme: !action.payload,
      };
    default:
      return state;
  }
}

export default themeReducer;
