/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";
import { setLoadingState } from "../../app/actions/actionCreators";

export const fetchAllPriceRequest = () => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.get("priceChange")
    .then((response) => {
      dispatch({
        type: actionTypes.GET_PRICE_REQUEST,
        payload: response?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
  dispatch(setLoadingState(false));
};
