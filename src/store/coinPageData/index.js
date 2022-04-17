const initialState = {
  coinDataLoading: false,
  coinDataError: false,
  marketDataLoading: false,
  marketDataError: false,
  marketChartsLoading: false,
  marketChartsError: false,
  marketData: null,
  coinData: null,
  chartData: null,
  coinPrice: 0,
  coinSymbol: "",
};

export const GET_COIN_DATA_PENDING = "GET_COIN_DATA_PENDING";
export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
export const GET_COIN_DATA_ERROR = "GET_COIN_DATA_ERROR";
export const GET_MARKET_DATA_PENDING = "GET_MARKET_DATA_PENDING";
export const GET_MARKET_DATA_SUCCESS = "GET_MARKET_DATA_SUCCESS";
export const GET_MARKET_DATA_ERROR = "GET_MARKET_DATA_ERROR";
export const GET_MARKET_CHARTS_PENDING = "GET_MARKET_CHARTS_PENDING";
export const GET_MARKET_CHARTS_SUCCESS = "GET_MARKET_CHARTS_SUCCESS";
export const GET_MARKET_CHARTS_ERROR = "GET_MARKET_CHARTS_ERROR";

function coinPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MARKET_DATA_PENDING:
      return {
        ...state,
        marketDataError: false,
        marketDataLoading: true,
      };
    case GET_MARKET_DATA_SUCCESS:
      return {
        ...state,
        marketDataLoading: false,
        marketData: action.payload,
        coinPrice: action.payload.current_price,
        coinSymbol: action.payload.symbol.toUpperCase(),
      };
    case GET_MARKET_DATA_ERROR:
      return {
        ...state,
        marketDataError: true,
        marketDataLoading: false,
      };
    case GET_COIN_DATA_PENDING:
      return {
        ...state,
        coinDataError: false,
        coinDataLoading: true,
      };
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        coinData: action.payload,
        coinDataLoading: false,
      };
    case GET_COIN_DATA_ERROR:
      return {
        ...state,
        coinDataError: true,
        coinDataLoading: false,
      };
    case GET_MARKET_CHARTS_PENDING:
      return {
        ...state,
        marketChartsError: false,
        marketChartsLoading: true,
      };
    case GET_MARKET_CHARTS_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
        marketChartsLoading: false,
      };
    case GET_MARKET_CHARTS_ERROR:
      return {
        ...state,
        marketChartsError: true,
        marketChartsLoading: false,
      };
    default:
      return state;
  }
}

export default coinPageReducer;
