import { combineReducers, createStore } from "redux";
import globalData from "./globalData/globalDataReducer";

const reducers = combineReducers({
  globalData,
});

export const store = createStore(reducers, window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
