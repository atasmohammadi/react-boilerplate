import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the Home state domain
 */
// @ts-ignore 
const selectHomeDomain = (state) => state.home || initialState;

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(selectHomeDomain, (subState) => subState.loading);

const makeSelectMovies = () =>
  createSelector(selectHomeDomain, (subState) => subState.movies);

const makeSelectError = () =>
  createSelector(selectHomeDomain, (subState) => subState.error);

const makeSelectSuccess = () =>
  createSelector(selectHomeDomain, (subState) => subState.success);

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(selectHomeDomain, (subState) => subState);

export default makeSelectHome;
export {
  makeSelectLoading,
  makeSelectMovies,
  makeSelectError,
  makeSelectSuccess,
};
