import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
 } from './constants';

const TOKEN = localStorage.getItem('token');
export function* fetchPosts() {
  const URL = `${HOST}api/posts?access_token=${TOKEN}`;
  try {
    const response = yield call(axios.get, URL);
    yield put({ type: FETCH_POSTS_SUCCESS, data: response.data });
  } catch (err) {
    yield put({ type: FETCH_POSTS_FAILED, message: err.response.data.error.details.messages });
  }
}


export function* postsWatcher() {
  const watcher = yield takeLatest(FETCH_POSTS_REQUESTED, fetchPosts);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  postsWatcher,
];
