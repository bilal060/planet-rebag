/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

export const fetchUserTransactions = (category) => (dispatch) => {
  Axios.get(`session/getAllRedeemSession?category=${category}`, {
    withCredentials: true,
  })
    .then((response) => {
      dispatch({
        type: actionTypes.USER_TRANSACTIONS,
        payload: response?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
};

export const fetchUserTransactionsById = (id, category) => (dispatch) => {
  Axios.get(`session/gettransactionByUserId?uid=${id}&category=${category}`)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_TRANSACTIONSBYID,
        payload: response?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
};
export const fetchUserTransactionsByStoreId = (id, category) => (dispatch) => {
  Axios.get(`session/gettransactionByStoreId?sid=${id}&category=${category}`)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_TRANSACTIONSBYSTIOREID,
        payload: response?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
};
