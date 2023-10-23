import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userTransactions: {},
};

const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_TRANSACTIONS:
      return {
        ...state,
        userTransactions: action.payload,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
