const initialState = {
  showAddAsset: false,
  searchCoins: [],
  isLoading: false,
  hasError: false,
  assets: [],
};

export const ADD_ASSET = "ADD_ASSET";
export const RESET_ASSETS = "RESET_ASSETS";
export const SEARCH_COINS_LOADING = "SEARCH_COINS_LOADING";
export const SEARCH_COINS_SUCCESS = "SEARCH_COINS_SUCCESS";
export const SEARCH_COINS_ERROR = "SEARCH_COINS_ERROR";
export const GET_COIN_STATS_LOADING = "GET_COIN_STATS_LOADING";
export const GET_COIN_STATS_SUCCESS = "GET_COIN_STATS_SUCCESS";
export const GET_COIN_STATS_ERROR = "GET_COIN_STATS_ERROR";

function selectCoinReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ASSET:
      return {
        ...state,
        showAddAsset: action.payload,
      };
    case RESET_ASSETS:
      return {
        ...state,
        assets: action.payload,
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
        searchCoins: action.payload,
      };
    case SEARCH_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case GET_COIN_STATS_LOADING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case GET_COIN_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        assets: [...state.assets, action.payload],
      };
    case GET_COIN_STATS_ERROR:
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
