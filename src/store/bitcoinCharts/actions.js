import axios from "axios";
import {
  GET_BITCOIN_CHARTS_SUCCESS,
  GET_BITCOIN_CHARTS_PENDING,
  GET_BITCOIN_CHARTS_ERROR,
} from "./index";

export const getBitcoinCharts =
  (chartDays, chartInterval) => async (dispatch, getState) => {
    const state = getState();
    let currency = state.currency.currency;
    try {
      dispatch({ type: GET_BITCOIN_CHARTS_PENDING });

      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${chartDays}&interval=${chartInterval}`
      );
      setTimeout(() => {
        dispatch({
          type: GET_BITCOIN_CHARTS_SUCCESS,
          payload: data,
        });
      }, 800);
    } catch (err) {
      dispatch({ type: GET_BITCOIN_CHARTS_ERROR, payload: err });
    }
  };
