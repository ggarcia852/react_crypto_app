import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalData from "./globalData";
import bitcoinCharts from "./bitcoinCharts";
import coinPage from "./coinPageData";
import currency from "./currency";
import searchBar from "./searchBar";
import coinsTable from "./coinsTable";

const reducers = combineReducers({
  currency,
  globalData,
  bitcoinCharts,
  coinPage,
  searchBar,
  coinsTable,
});

export const store = createStore(
  reducers,
  window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
