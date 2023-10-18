import {
  FETCH_STORE_DATA_SUCCESS,
  UPDATE_STORE_IS_ACTIVE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  storeData: null,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORE_DATA_SUCCESS:
      return { ...state, storeData: action.payload, error: null };
    case UPDATE_STORE_IS_ACTIVE_SUCCESS: {
      const updatedStoreData = state.storeData.map((store) => {
        if (store._id === action.payload.storeId) {
          return { ...store, isActive: action.payload.isActive };
        }
        return store;
      });
      return {
        ...state,
        storeData: updatedStoreData,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default storeReducer;
