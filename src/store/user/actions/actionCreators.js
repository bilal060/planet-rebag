import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

// export const loginUser = async (email, password) => {
//   const response = await Axios.post("user/login", { email, password });
//   return response.data;
// };

export const userLogin = (data, navigation) => (dispatch) => {
  Axios.post("users/login", data)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data,
      });
      navigation("/");
      Toast.success(response.data.status);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
};

// export const userLogin = () => (dispatch) => {
//   dispatch({
//     type: actionTypes.USER_LOGIN,
//     payload: "Login working",
//   });
// };
