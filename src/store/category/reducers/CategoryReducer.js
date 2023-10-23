import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: {},
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case actionTypes.ADD_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
