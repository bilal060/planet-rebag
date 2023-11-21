/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";
import { setLoadingState } from "../../app/actions/actionCreators";

export const fetchDealData = () => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.get("/deal", { withCredentials: true })
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_DEAL_DATA_SUCCESS,
        payload: response?.data?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
  dispatch(setLoadingState(false));
};

export const updateDealIsActive = (dealId, isActive) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.patch(`deal/updateDeal/${dealId}`, { isActive })
    .then(() => {
      dispatch({
        type: actionTypes.UPDATE_DEAL_IS_ACTIVE_SUCCESS,
        payload: { dealId, isActive },
      });
      Toast.success("Deal status updated successfully");
    })
    .catch((error) => {
      console.error(error);
    });
  dispatch(setLoadingState(false));
};

export const updateDeal = (dealId, data) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.patch(`deal/updateDeal/${dealId}`, data)
    .then((response) => {
      dispatch({
        type: actionTypes.SET_DEAL_IS_EDITING_UPDATED,
        payload: { dealId, data },
      });
      Toast.success(response.data.message);
    })
    .catch((error) => {
      console.error(error);
    });

  dispatch(setLoadingState(false));
};

export const addDeal = (formData) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.post("deal/addDeal", formData)
    .then((response) => {
      dispatch(fetchDealData());
      Toast.success(response.data.message);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
  dispatch(setLoadingState(false));
};
