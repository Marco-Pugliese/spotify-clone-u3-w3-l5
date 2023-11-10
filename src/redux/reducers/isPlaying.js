import { IS_PLAYING } from "../actions";
const initialState = {
  isPlaying: false,
};
const nowPlaying = (state = initialState, action) => {
  switch (action.type) {
    case IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };

    default:
      return state;
  }
};
export default nowPlaying;
