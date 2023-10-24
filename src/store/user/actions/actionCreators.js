/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

export const userLogin = (data, navigation) => (dispatch) => {
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
};

export const forgetPassword = (data) => (dispatch) => {
  Axios.post("user/forgotpassword", data)
    .then((response) => {
      Toast.success(response.data.message);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
};

export const resetNewPassword = (data, navigate) => (dispatch) => {
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
};

export const userLogout = (navigate) => (dispatch) => {
  dispatch({
    type: actionTypes.USER_LOGOUT,
  });
  navigate("/login");
};

export const fetchUserData =
  (page = 1, category) =>
  (dispatch) => {
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
  };

export const fetchCountData = () => (dispatch) => {
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
};
