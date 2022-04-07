import { SET_THEME } from "./index";

export const changeTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
