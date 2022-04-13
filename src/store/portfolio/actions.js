import axios from "axios";
import {
  ADD_ASSET,
  SEARCH_COINS_LOADING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
  GET_COIN_STATS_LOADING,
  GET_COIN_STATS_SUCCESS,
  GET_COIN_STATS_ERROR,
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

export const getCoinStats = (coin) => async (dispatch, getState) => {
    const state = getState();
    let currency = state.currency.currency
    try {
      dispatch({ type: GET_COIN_STATS_LOADING });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coin}&sparkline=false`
      );
      console.log(data[0])
      dispatch({
        type: GET_COIN_STATS_SUCCESS,
        payload: data[0],
      });
    } catch (err) {
      dispatch({ type: GET_COIN_STATS_ERROR, payload: err });
    }
};