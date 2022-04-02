const initialState = {
  coins: [],
  isLoading: false,
  hasError: false,
};

export const GET_COINS_DATA_PENDING = "GET_COINS_DATA_PENDING";
export const GET_COINS_DATA_SUCCESS = "GET_COINS_DATA_SUCCESS";
export const GET_COINS_DATA_ERROR = "GET_COINS_DATA_ERROR";
export const COINS_RESET = "COINS_RESET";

function coinsTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_DATA_PENDING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case COINS_RESET:
      return {
        ...state,
        coins: [],
      };
    case GET_COINS_DATA_SUCCESS:
      return {
        ...state,
        coins: state.coins.concat(action.payload),
        isLoading: false,
      };
    case GET_COINS_DATA_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default coinsTableReducer;
