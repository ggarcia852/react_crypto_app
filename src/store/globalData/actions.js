import axios from "axios";
import {
  GET_GLOBAL_DATA_SUCCESS,
  GET_GLOBAL_DATA_PENDING,
  GET_GLOBAL_DATA_ERROR,
} from "./index";

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_GLOBAL_DATA_PENDING });
    const { data } = await axios("https://api.coingecko.com/api/v3/global");
    setTimeout(() => {
      dispatch({
        type: GET_GLOBAL_DATA_SUCCESS,
        payload: data,
      });
    }, 300);
  } catch (err) {
    dispatch({ type: GET_GLOBAL_DATA_ERROR, payload: err });
  }
};
