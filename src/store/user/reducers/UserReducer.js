import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLogin: false,
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    case actionTypes.USER_LOGOUT:
      return {
        isLogin: false,
        user: {},
      };
    default:
      return state;
  }
};

export default UserReducer;
