import {call, put, takeLatest} from 'redux-saga/effects';
import {apiURLs} from '../../constants';
import request from '../../utils/request';

import * as constants from './constants';

import * as actions from './actions';

function* loadMovies(action: any, url = null): any {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = url ? url : `${apiURLs.films}`;
  try {
    const {
      data: {
        next,
        results,
      },
      /* headers */
    } = yield call(request, requestURL, options);
    yield put(actions.loadMoviesSuccess(results));
    if (next) yield loadMovies(action, next);
  } catch (error) {
    yield put(actions.loadMoviesFailed(error.response.status));
  }
}

export default function* HomeSaga() {
  yield takeLatest(constants.LOAD_MOVIES, loadMovies);
}
