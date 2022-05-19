import { SET_ACTIVE } from "./index";

export const setActiveNav = (active) => {
  return {
    type: SET_ACTIVE,
    payload: active,
  };
};
