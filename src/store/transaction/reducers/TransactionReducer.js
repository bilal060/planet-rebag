import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userTransactions: {},
  userTransactionsById: {},
  userTransactionsByStoreId: {},
};

const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_TRANSACTIONS:
      return {
        ...state,
        userTransactions: action.payload,
      };
    case actionTypes.USER_TRANSACTIONSBYID:
      return {
        ...state,
        userTransactionsById: action.payload,
      };
    case actionTypes.USER_TRANSACTIONSBYSTIOREID:
      return {
        ...state,
        userTransactionsByStoreId: action.payload,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
