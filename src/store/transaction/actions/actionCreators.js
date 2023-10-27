/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";
import { setLoadingState } from "../../app/actions/actionCreators";

export const fetchUserTransactions = (category) => (dispatch) => {
  dispatch(setLoadingState(true));

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
  dispatch(setLoadingState(false));
};

export const fetchUserTransactionsById = (id, category) => (dispatch) => {
  dispatch(setLoadingState(true));

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
  dispatch(setLoadingState(false));
};
export const fetchUserTransactionsByStoreId = (id, category) => (dispatch) => {
  dispatch(setLoadingState(true));

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
  dispatch(setLoadingState(false));
};
