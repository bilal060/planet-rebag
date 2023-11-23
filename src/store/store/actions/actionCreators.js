/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";
import { setLoadingState } from "../../app/actions/actionCreators";

export const fetchStoreData = () => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.get("store", { withCredentials: true })
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_STORE_DATA_SUCCESS,
        payload: response?.data?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
  dispatch(setLoadingState(false));
};

export const updateStoreIsActive = (storeId, isActive) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.patch(`store/updateStore/${storeId}`, { isActive })
    .then(() => {
      dispatch({
        type: actionTypes.UPDATE_STORE_IS_ACTIVE_SUCCESS,
        payload: { storeId, isActive },
      });
      Toast.success("Store status updated successfully");
    })
    .catch((error) => {
      console.error(error);
    });
  dispatch(setLoadingState(false));
};

export const updateStore = (storeId, data) => (dispatch) => {
  dispatch(setLoadingState(true));
  console.log(data);
  Axios.patch(`store/updateStore/${storeId}`, data)
    .then((response) => {
      dispatch({
        type: actionTypes.SET_STORE_IS_EDITING_UPDATED,
        payload: { storeId, data },
      });
      Toast.success(response.data.message);
      dispatch(setLoadingState(false));
    })
    .catch((error) => {
      console.error(error);
      dispatch(setLoadingState(false));
    });
};

export const addStore = (formData) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.post("store/addStore", formData)
    .then((response) => {
      dispatch(fetchStoreData());
      Toast.success(response.data.message);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
  dispatch(setLoadingState(false));
};
