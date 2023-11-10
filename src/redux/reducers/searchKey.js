import { SEARCH_KEY } from "../actions";
const initialState = {
  key: "",
};
const searchKey = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_KEY:
      return {
        ...state,
        key: action.payload,
      };

    default:
      return state;
  }
};
export default searchKey;
