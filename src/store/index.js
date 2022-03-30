import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalData from "./globalData";
import bitcoinCharts from "./bitcoinCharts";

const reducers = combineReducers({
  globalData,
  bitcoinCharts,
});

export const store = createStore(
  reducers,
  window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
