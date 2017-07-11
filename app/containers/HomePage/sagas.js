/**
 * Gets the repositories of the user from Github
 */

import { take, takeLatest, put, cancel, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { HOST } from 'constants/host';
import { LOAD_DATA, FETCH_CATEGORIES, FETCH_POSTS } from './constants';

export function* fetchCategories() {
  const URL = `${HOST}/api/categories`;
  const response = yield call(axios.get, URL);
  console.log(response);
}

export function* loadData() {
  yield put({ type: FETCH_CATEGORIES });
  // yield put({ type: FETCH_POSTS });
}

export function* userWatcher() {
  const loadWatcher = yield takeLatest(LOAD_DATA, loadData);
  const fetchCategoryWatcher = yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield take(LOCATION_CHANGE);
  yield cancel(loadWatcher);
  yield cancel(fetchCategoryWatcher);
}

// Bootstrap sagas
export default [
  userWatcher,
];
