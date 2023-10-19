import {
  FETCH_STORE_DATA_SUCCESS,
  SET_STORE_IS_EDITING,
  SET_STORE_IS_EDITING_UPDATED,
  UPDATE_STORE_IS_ACTIVE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  storeData: null,
  updatedStoreData: null,
  isEditing: false,
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
    case SET_STORE_IS_EDITING:
      return {
        ...state,
        updatedStoreData: state.storeData.find(
          (store) => store._id === action.payload.storeId,
        ),
        isEditing: action.payload.isEditing,
      };
    case SET_STORE_IS_EDITING_UPDATED: {
      const updatedStoreData = state.storeData.map((store) => {
        if (store._id === action.payload.storeId) {
          return { ...store, ...action.payload.data };
        }
        return store;
      });
      return {
        ...state,
        storeData: updatedStoreData,
        isEditing: false,
      };
    }

    default:
      return state;
  }
};

export default storeReducer;
