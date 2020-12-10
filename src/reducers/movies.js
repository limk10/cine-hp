import actionsTypes from "~/actions/actionsTypes";

const INITIAL_STATE = {};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.RELEASE_MOVIES:
      return { ...state, releaseMovies: action.payload };

    case actionsTypes.COLLECTION_MOVIES:
      return { ...state, collectionMovies: action.payload };

    case actionsTypes.MOVIE_BY_ID:
      return { ...state, movieByID: action.payload };

    default:
      return state;
  }
};

export default reducers;
