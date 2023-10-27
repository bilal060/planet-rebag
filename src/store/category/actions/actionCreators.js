/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";
import { setLoadingState } from "../../app/actions/actionCreators";

export const fetchAllCategories = (category) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.get(`category?category=${category}`, {
    withCredentials: true,
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        payload: response?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
  dispatch(setLoadingState(false));
};
export const addCategories = (data, showModal) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.post("category/addcategory", data)
    .then((response) => {
      dispatch(fetchAllCategories("All"));
      showModal(false);
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
  dispatch(setLoadingState(false));
};
