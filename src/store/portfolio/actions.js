import axios from "axios";
import {
  ADD_ASSET,
  RESET_ASSETS,
  SEARCH_COINS_LOADING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
  GET_COIN_STATS_LOADING,
  GET_COIN_STATS_SUCCESS,
  GET_COIN_STATS_ERROR,
} from "./index";

export const addAsset = (value) => {
  return {
    type: ADD_ASSET,
    payload: value,
  };
};
export const resetAssets = () => {
  return {
    type: RESET_ASSETS,
    payload: [],
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

export const getCoinStats = (coin, date) => async (dispatch, getState) => {
  const state = getState();
  let currency = state.currency.currency;
  try {
    dispatch({ type: GET_COIN_STATS_LOADING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
`
    );
    const price = data.market_data.current_price[currency];
    const priceChange24 =
      data.market_data.price_change_percentage_24h_in_currency[currency];
    const circulatingSupply = data.market_data.circulating_supply;
    const maxSupply = data.market_data.max_supply;
    const marketCap = data.market_data.market_cap[currency];
    const volume = data.market_data.total_volume[currency];

    const history =
      await axios(`https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${date}
  `);
    const purchasePrice = history.data.market_data?.current_price[currency];
    dispatch({
      type: GET_COIN_STATS_SUCCESS,
      payload: {
        ...coin,
        price,
        priceChange24,
        circulatingSupply,
        maxSupply,
        marketCap,
        volume,
        purchasePrice,
      },
    });
  } catch (err) {
    dispatch({ type: GET_COIN_STATS_ERROR, payload: err });
  }
};
