const initialState = {
  showAddAsset: false,
  coins: [],
  isLoading: false,
  hasError: false,
};

export const ADD_ASSET = "ADD_ASSET";
export const SEARCH_COINS_LOADING = "SEARCH_COINS_LOADING";
export const SEARCH_COINS_SUCCESS = "SEARCH_COINS_SUCCESS";
export const SEARCH_COINS_ERROR = "SEARCH_COINS_ERROR";

function selectCoinReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ASSET:
      return {
        ...state,
        showAddAsset: action.payload,
      };
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

export default selectCoinReducer;
