import { NOW_PLAYING } from "../actions";
const initialState = {
  songNow: {},
};
const nowPlaying = (state = initialState, action) => {
  switch (action.type) {
    case NOW_PLAYING:
      return {
        ...state,
        songNow: action.payload,
      };

    default:
      return state;
  }
};
export default nowPlaying;
