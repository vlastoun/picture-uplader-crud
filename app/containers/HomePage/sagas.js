import { take, takeLatest, put, cancel, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { HOST } from 'constants/host';
import { LOAD_DATA, FETCH_CATEGORIES, FETCH_POSTS, ADD_POSTS, ADD_CATEGORIES } from './constants';

export function* fetchCategories() {
  const URL = `${HOST}api/categories`;
  const response = yield call(axios.get, URL);
  yield put({ type: ADD_CATEGORIES, categories: response.data });
}
export function* fetchPosts() {
  const URL = `${HOST}api/posts`;
  const response = yield call(axios.get, URL);
  yield put({ type: ADD_POSTS, categories: response.data });
}

export function* loadData() {
  yield put({ type: FETCH_CATEGORIES });
  yield put({ type: FETCH_POSTS });
}

export function* userWatcher() {
  const loadWatcher = yield takeLatest(LOAD_DATA, loadData);
  const fetchCategoryWatcher = yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  const fetchPostWatcher = yield takeLatest(FETCH_CATEGORIES, fetchPosts);
  yield take(LOCATION_CHANGE);
  yield cancel(loadWatcher);
  yield cancel(fetchCategoryWatcher);
  yield cancel(fetchPostWatcher);
}

// Bootstrap sagas
export default [
  userWatcher,
];
