/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

export const fetchStoreData = (data) => (dispatch) => {
  Axios.get("store", data, { withCredentials: true })
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_STORE_DATA_SUCCESS,
        payload: response?.data?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
};

export const updateStoreIsActive = (storeId, isActive) => (dispatch) => {
  Axios.patch(`store/updateStore/${storeId}`, { isActive })
    .then((response) => {
      dispatch({
        type: actionTypes.UPDATE_STORE_IS_ACTIVE_SUCCESS,
        payload: { storeId, isActive },
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
