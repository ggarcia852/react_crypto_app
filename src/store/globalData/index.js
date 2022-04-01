const initialState = {
  data: null,
  isLoading: false,
  hasError: false,
};

export const GET_GLOBAL_DATA_PENDING = "GET_GLOBAL_DATA_PENDING";
export const GET_GLOBAL_DATA_SUCCESS = "GET_GLOBAL_DATA_SUCCESS";
export const GET_GLOBAL_DATA_ERROR = "GET_GLOBAL_DATA_ERROR";

function globalDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_DATA_PENDING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case GET_GLOBAL_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case GET_GLOBAL_DATA_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default globalDataReducer;
