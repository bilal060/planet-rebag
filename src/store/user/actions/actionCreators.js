import * as actionTypes from "./actionTypes";

export const userLogin = () => (dispatch) => {
  dispatch({
    type: actionTypes.USER_LOGIN,
    payload: "Login working",
  });
};
