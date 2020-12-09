import actionsTypes from "~/actions/actionsTypes";

const INITIAL_STATE = {};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.RELEASE_FILMS:
      return { ...state, releaseFilms: action.payload };

    case actionsTypes.FILM_BY_ID:
      return { ...state, filmByID: action.payload };

    default:
      return state;
  }
};

export default reducers;
