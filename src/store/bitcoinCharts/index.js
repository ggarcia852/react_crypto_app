const initialState = {
  chartData: null,
  isLoading: false,
  hasError: false,
};

export const GET_BITCOIN_CHARTS_PENDING = "GET_BITCOIN_CHARTS_PENDING";
export const GET_BITCOIN_CHARTS_SUCCESS = "GET_BITCOIN_CHARTS_SUCCESS";
export const GET_BITCOIN_CHARTS_ERROR = "GET_BITCOIN_CHARTS_ERROR";

function bitcoinChartsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BITCOIN_CHARTS_PENDING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case GET_BITCOIN_CHARTS_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
        isLoading: false,
      };
    case GET_BITCOIN_CHARTS_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default bitcoinChartsReducer;