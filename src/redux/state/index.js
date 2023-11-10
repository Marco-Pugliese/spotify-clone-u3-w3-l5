import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import favourite from "../reducers/favourite";
import myFetch from "../reducers/myFetch";
import myList from "../reducers/myList";
import nowPlaying from "../reducers/nowPlaying";
import isPlaying from "../reducers/isPlaying";

const combinedReducers = combineReducers({
  favourite,
  myFetch,
  myList,
  nowPlaying,
  isPlaying,
});
const store = configureStore({
  reducer: combinedReducers,
});
export default store;
