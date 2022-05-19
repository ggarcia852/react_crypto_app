import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import throttle from "lodash.throttle";
import globalData from "./globalData";
import bitcoinCharts from "./bitcoinCharts";
import coinPage from "./coinPageData";
import currency from "./currency";
import theme from "./theme";
import searchBar from "./searchBar";
import coinsTable from "./coinsTable";
import portfolio from "./portfolio";
import mobileNav from "./mobileNav"

const reducers = combineReducers({
  currency,
  theme,
  globalData,
  bitcoinCharts,
  coinPage,
  searchBar,
  coinsTable,
  portfolio,
  mobileNav,
});

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

export const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(
  throttle(() => {
    saveState({
      theme: store.getState().theme,
      currency: store.getState().currency,
      portfolio: store.getState().portfolio,
    });
  }, 1000)
);
