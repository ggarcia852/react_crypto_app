const initialState = {
    marketData: null,
    coinData: null,
    isLoading: false,
    hasError: false,
  };
  
  export const GET_COIN_DATA_PENDING = "GET_COIN_DATA_PENDING";
  export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
  export const GET_COIN_DATA_ERROR = "GET_COIN_DATA_ERROR";
  export const GET_MARKET_DATA_PENDING = "GET_MARKET_DATA_PENDING";
  export const GET_MARKET_DATA_SUCCESS = "GET_MARKET_DATA_SUCCESS";
  export const GET_MARKET_DATA_ERROR = "GET_MARKET_DATA_ERROR";
  
  function coinPageReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MARKET_DATA_PENDING: 
      return {
        ...state, 
        hasError: false,
        isLoading: true
      }
    case GET_MARKET_DATA_SUCCESS:
      return {
        ...state,
        marketData: action.payload,
        isLoading: false,
      };
      case GET_MARKET_DATA_ERROR: 
      return {
          ...state,
          hasError: true,
          isLoading: false
      }
        case GET_COIN_DATA_PENDING: 
        return {
          ...state, 
          hasError: false,
          isLoading: true
        }
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
            isLoading: false
        }
      default:
        return state;
    }
  }
  
  export default coinPageReducer;
  