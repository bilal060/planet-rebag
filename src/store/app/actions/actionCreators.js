import * as actionTypes from "./actionTypes";

export const setLoadingState = (isLoading) => {
  return {
    type: actionTypes.SET_LOADING,
    isLoading,
  };
};
