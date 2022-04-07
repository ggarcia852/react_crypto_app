import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalData from "./globalData";
import bitcoinCharts from "./bitcoinCharts";
import coinPage from "./coinPageData";
import currency from "./currency";
import theme from "./theme";
import searchBar from "./searchBar";
import coinsTable from "./coinsTable";
import portfolio from "./portfolio";

const reducers = combineReducers({
  currency,
  theme,
  globalData,
  bitcoinCharts,
  coinPage,
  searchBar,
  coinsTable,
  portfolio,
});

export const store = createStore(reducers, applyMiddleware(thunk));
