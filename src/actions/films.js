import actionsTypes from "./actionsTypes";

export default {
  releaseFilms: value => {
    return {
      type: actionsTypes.RELEASE_FILMS,
      payload: value
    };
  },
  filmByID: value => {
    return {
      type: actionsTypes.FILM_BY_ID,
      payload: value
    };
  }
};
