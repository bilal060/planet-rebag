import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLogin: false,
  user: {},
  getUsers: null,
  count: {},
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
    case actionTypes.FETCH_USER_DATA_SUCCESS:
      return { ...state, isLogin: true, getUsers: action.payload, error: null };
    case actionTypes.FETCH_COUNT:
      return { ...state, isLogin: true, count: action.payload, error: null };
    default:
      return state;
  }
};

export default UserReducer;
