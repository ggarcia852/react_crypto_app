const initialState = {
  showAddAsset: false,
  searchCoins: [],
  isLoading: false,
  hasError: false,
  assets: [],
};

export const ADD_ASSET = "ADD_ASSET";
export const SEARCH_COINS_LOADING = "SEARCH_COINS_LOADING";
export const SEARCH_COINS_SUCCESS = "SEARCH_COINS_SUCCESS";
export const SEARCH_COINS_ERROR = "SEARCH_COINS_ERROR";
export const ADD_COIN_TO_ASSETS = "ADD_COIN_TO_ASSETS";

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
        searchCoins: action.payload,
      };
    case SEARCH_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case ADD_COIN_TO_ASSETS:
        console.log(state.assets)
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    default:
      return state;
  }
}

export default selectCoinReducer;
