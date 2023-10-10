/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

// export const loginUser = async (email, password) => {
//   const response = await Axios.post("user/login", { email, password });
//   return response.data;
// };

export const userLogin = (data, navigation) => (dispatch) => {
  Axios.post("user/login", data, { withCredentials: true })
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data,
      });
      navigation("/home");
      Toast.success(response.data.status);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
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
  Axios.patch("user/resetpassword", data, { withCredentials: true })
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
      console.error("Signup Error", error);
      Toast.error(error.response.data.message);
    });
};

export const verifyToken = (data, navigate) => (dispatch) => {
  Axios.post("user/verify-otp", data, { withCredentials: true })
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
