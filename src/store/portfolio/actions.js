import axios from "axios";
import {
  ADD_ASSET,
  SEARCH_COINS_LOADING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
  ADD_COIN_TO_ASSETS,
} from "./index";

export const addAsset = (value) => {
  return {
    type: ADD_ASSET,
    payload: value,
  };
};

export const searchCoins = (value) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_COINS_LOADING });
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${value}`
    );
    dispatch({
      type: SEARCH_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: SEARCH_COINS_ERROR, payload: err });
  }
};

export const addCoinToAssets = (coin) => {
  return {
    type: ADD_COIN_TO_ASSETS,
    payload: coin,
  };
};
