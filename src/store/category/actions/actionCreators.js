/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

export const fetchAllCategories = (category) => (dispatch) => {
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
};
export const addCategories = (data, showModal) => (dispatch) => {
  Axios.post("category/addcategory", data)
    .then((response) => {
      dispatch(fetchAllCategories("All"));
      showModal(false);
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
};
