const initialState = {
  storeData: null,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STORE_DATA_SUCCESS":
      return { ...state, storeData: action.payload, error: null };
    default:
      return state;
  }
};

export default storeReducer;
