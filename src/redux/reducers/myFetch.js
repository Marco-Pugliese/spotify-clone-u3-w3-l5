import { GET_BEATLES_FETCH, GET_MINA_FETCH, GET_QUEEN_FETCH } from "../actions";
const initialState = {
  songsMina: [],
  songsBeatles: [],
  songsQueen: [],
};

const myRockFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_MINA_FETCH:
      return {
        ...state,
        songsMina: action.payload,
      };
    case GET_QUEEN_FETCH:
      return {
        ...state,
        songsQueen: action.payload,
      };
    case GET_BEATLES_FETCH:
      return {
        ...state,
        songsBeatles: action.payload,
      };
    default:
      return state;
  }
};
export default myRockFetch;
