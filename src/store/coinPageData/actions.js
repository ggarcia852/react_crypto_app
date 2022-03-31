import axios from "axios";
import {
  GET_COIN_DATA_SUCCESS,
  GET_COIN_DATA_PENDING,
  GET_COIN_DATA_ERROR,
  GET_MARKET_DATA_SUCCESS,
  GET_MARKET_DATA_PENDING,
  GET_MARKET_DATA_ERROR,
  GET_MARKET_CHARTS_SUCCESS,
  GET_MARKET_CHARTS_PENDING,
  GET_MARKET_CHARTS_ERROR,
} from "./index";

export const getCoinData = (coin) => async (dispatch) => {
  try {
    dispatch({ type: GET_COIN_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true`
    );
    dispatch({
      type: GET_COIN_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: GET_COIN_DATA_ERROR, payload: err });
  }
};

export const getMarketData = (coin) => async (dispatch, getState) => {
  const state = getState();
  let currency = state.currency.currency
  try {
    dispatch({ type: GET_MARKET_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coin}&sparkline=false`
    );
    dispatch({
      type: GET_MARKET_DATA_SUCCESS,
      payload: data[0],
    });
  } catch (err) {
    dispatch({ type: GET_MARKET_DATA_ERROR, payload: err });
  }
};

export const getMarketCharts = (coin, chartDays) => async (dispatch, getState) => {
  const state = getState();
  let currency = state.currency.currency
  try {
    dispatch({ type: GET_MARKET_CHARTS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${chartDays}`
    );
    dispatch({
      type: GET_MARKET_CHARTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: GET_MARKET_CHARTS_ERROR, payload: err });
  }
};
