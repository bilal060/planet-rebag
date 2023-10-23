/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

export const fetchUserTransactions = (category) => (dispatch) => {
  Axios.get(`session/getAllRedeemSession?category=${category}`, {
    withCredentials: true,
  })
    .then((response) => {
      dispatch({
        type: actionTypes.USER_TRANSACTIONS,
        payload: response?.data,
      });
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
    });
};

// export const fetchOneUserData = (id) => (dispatch) => {
//   Axios.get(`user/${id}`, {
//     withCredentials: true,
//   })
//     .then((response) => {
//       console.log(response);
//       dispatch({
//         type: actionTypes.FETCH_USER_DATA_SUCCESS,
//         payload: response?.data?.data,
//       });
//     })
//     .catch((error) => {
//       Toast.error(error?.response?.data?.message);
//     });
// };
