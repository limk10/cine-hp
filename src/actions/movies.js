import actionsTypes from "./actionsTypes";

export default {
  releaseMovies: value => {
    return {
      type: actionsTypes.RELEASE_MOVIES,
      payload: value
    };
  },
  collectionMovies: value => {
    return {
      type: actionsTypes.COLLECTION_MOVIES,
      payload: value
    };
  },
  movieByID: value => {
    return {
      type: actionsTypes.MOVIE_BY_ID,
      payload: value
    };
  }
};
