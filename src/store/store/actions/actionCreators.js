/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

export const fetchStoreData = (data) => (dispatch) => {
  Axios.get("store", data, { withCredentials: true })
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_STORE_DATA_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
};
