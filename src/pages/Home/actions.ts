/*
 *
 * Home actions
 *
 */

import * as constants from './constants';

import type { Movie } from './types';

// Movies
export const loadMovies = () => ({
  type: constants.LOAD_MOVIES,
});

export const loadMoviesSuccess = (movies: Movie[]) => ({
  type: constants.LOAD_MOVIES_SUCCESS,
  payload: {movies},
});

export const loadMoviesFailed = (error: string) => ({
  type: constants.LOAD_MOVIES_FAILED,
  payload: error,
});