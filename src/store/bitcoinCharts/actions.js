import axios from "axios";
import {
  GET_BITCOIN_CHARTS_SUCCESS,
  GET_BITCOIN_CHARTS_PENDING,
  GET_BITCOIN_CHARTS_ERROR,
} from "./index";

export const getBitcoinCharts = (chartDays, chartInterval, props) => async (dispatch, getState) => {
  // const state = getState();
  try {
    dispatch({ type: GET_BITCOIN_CHARTS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${chartDays}&interval=${chartInterval}`
    );
    dispatch({
      type: GET_BITCOIN_CHARTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: GET_BITCOIN_CHARTS_ERROR, payload: err });
  }
};
