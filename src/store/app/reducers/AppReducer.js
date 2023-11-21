import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default AppReducer;
