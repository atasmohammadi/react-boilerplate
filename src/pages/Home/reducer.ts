/*
 *
 * Home reducer
 *
 */

import produce from 'immer';
import * as constants from './constants';
import type { HOME_STATE, MOVIES_OBJECT, ACTION } from './types';

export const initialState: HOME_STATE = {
  movies: {},
  error: false,
  success: false,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action: ACTION) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.LOAD_MOVIES:
        draft.loading = true;
        break;
      case constants.LOAD_MOVIES_SUCCESS:
        // to cache the results and also have the offline capability, instead
        // of replacing the movies with results from API, we would append new
        // data into existing one. To avoid having duplicate entries array
        // is converted to object.
        let moviesObj: MOVIES_OBJECT = {};
        const movies = action.payload?.movies.reduce((obj, item) => {
          obj[item.title] = item;
          return obj;
        }, moviesObj);
        draft.movies = Object.assign({}, state.movies, movies);
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
    }
  });

export default homeReducer;
