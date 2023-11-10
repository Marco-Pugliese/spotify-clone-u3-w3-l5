import { ADD_TO_LIST, REMOVE_TO_LIST } from "../actions";
const initialState = {
  myList: [],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case REMOVE_TO_LIST:
      return {
        ...state,
        myList: [
          ...state.myList.filter(
            (singleElement) => singleElement._id !== action.payload._id
          ),
        ],
      };
    default:
      return state;
  }
};
export default list;
