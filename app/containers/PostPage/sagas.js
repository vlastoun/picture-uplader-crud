import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  SEND_POST_REQUESTED,
  NEW_POST_REQUESTED,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
 } from './constants';

const TOKEN = localStorage.getItem('token');

export function* fetchCategories() {
  const URL = `${HOST}api/ctagories?access_token=${TOKEN}`;
  try {
    const response = yield call(axios.get, URL);
    yield put({ type: FETCH_CATEGORIES_SUCCESS, data: response.data });
  } catch (err) {
    yield put({ type: FETCH_CATEGORIES_FAILED, message: err.response.data.error.details.messages });
  }
}

export function* newPostRequest(action) {
  console.log(action.content.currentEditorState);
  console.log(action.content.data.toJS());
}

export function* postWatcher() {
  const watcher = yield takeLatest(SEND_POST_REQUESTED, newPostRequest);
  const watcherFetchCategories = yield takeLatest(NEW_POST_REQUESTED, fetchCategories);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(watcherFetchCategories);
}

export default [
  postWatcher,
];
