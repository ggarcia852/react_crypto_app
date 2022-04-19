import axios from "axios";
import {
  SEARCH_COINS_LOADING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
} from "./index";

export const searchCoins = (value) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_COINS_LOADING });
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${value}`
    );
    setTimeout(() => {
      dispatch({
        type: SEARCH_COINS_SUCCESS,
        payload: data,
      });
    }, 300);
  } catch (err) {
    dispatch({ type: SEARCH_COINS_ERROR, payload: err });
  }
};
