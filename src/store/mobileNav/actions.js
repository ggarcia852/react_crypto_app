import { SET_ACTIVE } from "./index";

export const setActiveNav = (active, previous = "") => {
  return {
    type: SET_ACTIVE,
    payload: { active, previous },
  };
};
