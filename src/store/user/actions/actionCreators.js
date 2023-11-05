/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";
import { setLoadingState } from "../../app/actions/actionCreators";

export const userLogin = (data, navigation) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.post("user/login", data)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data,
      });
      navigation("/home");
      Toast.success(response?.data?.status);
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
  dispatch(setLoadingState(false));
};

export const forgetPassword = (data) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.post("user/forgotpassword", data)
    .then((response) => {
      Toast.success(response.data.message);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
  dispatch(setLoadingState(false));
};

export const resetNewPassword = (data, navigate) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.patch("user/resetpassword", data)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data.user,
      });
      navigate("/confirmation");
      Toast.success(response.data.message);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
  dispatch(setLoadingState(false));
};

export const userSignup = (data, navigation) => {
  Axios.post("user/register", data)
    .then((response) => {
      if (data.email) {
        navigation(`/otpmail?email=${data.email}`);
      } else {
        navigation("/otpmobile");
      }
      Toast.success(response.data.message);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
};

export const verifyToken = (data, navigate) => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.post("user/verify-otp", data)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data.user,
      });
      Toast.success(response.data.message);
      navigate("/confirmation");
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
  dispatch(setLoadingState(false));
};

export const userLogout = (navigate) => (dispatch) => {
  dispatch(setLoadingState(true));
  dispatch({
    type: actionTypes.USER_LOGOUT,
  });
  setTimeout(() => localStorage.clear(), 1000);
  navigate("/login");
  dispatch(setLoadingState(false));
};

export const fetchUserData =
  (page = 1, category) =>
  (dispatch) => {
    dispatch(setLoadingState(true));
    Axios.get(`user?page=${page}&category=${category}`, {
      withCredentials: true,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.FETCH_USER_DATA_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        Toast.error(error?.response?.data?.message);
      });
    dispatch(setLoadingState(false));
  };

export const fetchCountData = () => (dispatch) => {
  dispatch(setLoadingState(true));
  Axios.get("user/getCountData")
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_COUNT,
        payload: response?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
  dispatch(setLoadingState(false));
};
