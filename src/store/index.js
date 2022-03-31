import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalData from "./globalData";
import bitcoinCharts from "./bitcoinCharts";
import coinPageData from "./coinPageData";
import currency from "./currency"

const reducers = combineReducers({
  currency,
  globalData,
  bitcoinCharts,
  coinPageData,
});

export const store = createStore(
  reducers,
  window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
