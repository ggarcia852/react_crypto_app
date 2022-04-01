const initialState = {
  isLoading: false,
  hasError: false,
  coins: null,
};

export const SEARCH_COINS_LOADING = "SEARCH_COINS_LOADING";
export const SEARCH_COINS_SUCCESS = "SEARCH_COINS_SUCCESS";
export const SEARCH_COINS_ERROR = "SEARCH_COINS_ERROR";

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COINS_LOADING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case SEARCH_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coins: action.payload,
      };
    case SEARCH_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default searchBarReducer;
