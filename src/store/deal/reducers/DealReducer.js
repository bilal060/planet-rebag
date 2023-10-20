import {
  FETCH_DEAL_DATA_SUCCESS,
  SET_DEAL_IS_EDITING,
  SET_DEAL_IS_EDITING_UPDATED,
  UPDATE_DEAL_IS_ACTIVE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  dealData: null,
  updatedDealData: null,
  isEditing: false,
};

const dealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEAL_DATA_SUCCESS:
      return { ...state, dealData: action.payload, error: null };
    case UPDATE_DEAL_IS_ACTIVE_SUCCESS: {
      const updatedDealData = state.dealData.map((deal) => {
        if (deal._id === action.payload.dealId) {
          return { ...deal, isActive: action.payload.isActive };
        }
        return deal;
      });
      return {
        ...state,
        dealData: updatedDealData,
        error: null,
      };
    }
    case SET_DEAL_IS_EDITING:
      return {
        ...state,
        updatedDealData: state.dealData.find(
          (deal) => deal._id === action.payload.dealId,
        ),
        isEditing: action.payload.isEditing,
      };
    case SET_DEAL_IS_EDITING_UPDATED: {
      const updatedDealData = state.dealData.map((deal) => {
        if (deal._id === action.payload.dealId) {
          return { ...deal, ...action.payload.data };
        }
        return deal;
      });
      return {
        ...state,
        dealData: updatedDealData,
        isEditing: false,
      };
    }

    default:
      return state;
  }
};

export default dealReducer;
