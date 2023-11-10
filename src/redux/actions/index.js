export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_TO_FAV = "REMOVE_TO_FAV";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_TO_LIST = "REMOVE_TO_LIST";
export const GET_MINA_FETCH = "GET_MINA_FETCH";
export const GET_QUEEN_FETCH = "GET_QUEEN_FETCH";
export const GET_BEATLES_FETCH = "GET_BEATLES_FETCH";
export const NOW_PLAYING = "NOW_PLAYING";
export const IS_PLAYING = "IS_PLAYING";
export const GET_SEARCH_FETCH = "GET_SEARCH_FETCH";

export const isPlayingAction = (payload) => {
  return {
    type: IS_PLAYING,
    payload: payload,
  };
};

export const nowPlayingAction = (payload) => {
  return {
    type: NOW_PLAYING,
    payload: payload,
  };
};
export const addToFavAction = (payload) => {
  return {
    type: ADD_TO_FAV,
    payload: payload,
  };
};
export const removeToFavAction = (payload) => {
  return {
    type: REMOVE_TO_FAV,
    payload: payload,
  };
};
export const addToListAction = (payload) => {
  return {
    type: ADD_TO_LIST,
    payload: payload,
  };
};
export const removeToListAction = (payload) => {
  return {
    type: REMOVE_TO_LIST,
    payload: payload,
  };
};
export const getFetchAction = () => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=mina`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_MINA_FETCH,
          payload: datas.data,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
export const getFetchAction2 = () => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_QUEEN_FETCH,
          payload: datas.data,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};

export const getFetchAction3 = () => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=beatles`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_BEATLES_FETCH,
          payload: datas.data,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};

export const searchFetchAction = (key) => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${key}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_SEARCH_FETCH,
          payload: datas.data,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
