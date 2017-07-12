import { take, takeLatest, put, cancel, call, select } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { HOST } from 'constants/host';
import { LOAD_DATA,
  FETCH_CATEGORIES,
  FETCH_POSTS,
  ADD_POSTS,
  ADD_CATEGORIES,
  TAB_CLICKED,
   } from './constants';


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

const selectActiveTab = (state) => state.toJS().homepage.activeTab;

export function* tabClicked() {
  const state = yield select(selectActiveTab);
  yield put(push(state.url));
}


export function* userWatcher() {
  const loadWatcher = yield takeLatest(LOAD_DATA, loadData);
  const fetchCategoryWatcher = yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  const fetchPostWatcher = yield takeLatest(FETCH_CATEGORIES, fetchPosts);
  const tabClickWatcher = yield takeLatest(TAB_CLICKED, tabClicked);
  yield take(LOCATION_CHANGE);
  yield cancel(loadWatcher);
  yield cancel(fetchCategoryWatcher);
  yield cancel(fetchPostWatcher);
  yield cancel(tabClickWatcher);
}

// Bootstrap sagas
export default [
  userWatcher,
];
