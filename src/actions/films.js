import actionsTypes from "./actionsTypes";

export default {
  releaseFilms: value => {
    return {
      type: actionsTypes.RELEASE_FILMS,
      payload: value
    };
  }
};
