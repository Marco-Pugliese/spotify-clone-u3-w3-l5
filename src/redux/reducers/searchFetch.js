import { GET_SEARCH_FETCH } from "../actions";
const initialState = {
  searchFetch: {},
};

const searchFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_FETCH:
      return {
        ...state,
        searchFetch: action.payload,
      };
    default:
      return state;
  }
};
export default searchFetch;
