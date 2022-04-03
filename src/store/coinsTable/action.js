import axios from "axios";
import {
  GET_COINS_DATA_SUCCESS,
  GET_COINS_DATA_PENDING,
  GET_COINS_DATA_ERROR,
  COINS_RESET,
} from "./index";

export const getCoins = (page) => async (dispatch, getState) => {
  const state = getState();
  let currency = state.currency.currency;
  try {
    dispatch({ type: GET_COINS_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=25&page=${page}&sparkline=true&price_change_percentage=1h%2C%2024h%2C7d`
    );
    dispatch({
      type: GET_COINS_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: GET_COINS_DATA_ERROR, payload: err });
  }
};

export const coinsReset = () => (dispatch) => {
  dispatch({
    type: COINS_RESET,
  });
};
