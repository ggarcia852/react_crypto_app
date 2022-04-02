const initialState = {
  isLoading: false,
  hasError: false,
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
        hasError: false,
        isLoading: true,
      };
    case GET_MARKET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        marketData: action.payload,
        coinPrice: action.payload.current_price,
        coinSymbol: action.payload.symbol.toUpperCase(),
      };
    case GET_MARKET_DATA_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    case GET_COIN_DATA_PENDING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        coinData: action.payload,
        isLoading: false,
      };
    case GET_COIN_DATA_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    case GET_MARKET_CHARTS_PENDING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case GET_MARKET_CHARTS_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
        isLoading: false,
      };
    case GET_MARKET_CHARTS_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default coinPageReducer;
