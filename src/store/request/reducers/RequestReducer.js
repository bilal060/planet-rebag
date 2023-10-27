import * as actionTypes from "../actions/actionTypes";

const initialState = {
  PriceRequest: {},
};

const RequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRICE_REQUEST:
      return {
        ...state,
        PriceRequest: action.payload,
      };
    default:
      return state;
  }
};

export default RequestReducer;
