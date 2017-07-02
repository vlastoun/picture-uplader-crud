import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  DELETE_CONFIRMED,
  DELETE_POST_FAILED,
  DELETE_POST_SUCCESS,
  EDIT_REQUESTED,
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

export function* deletePost(action) {
  const URL = `${HOST}api/posts/${action.id}?access_token=${TOKEN}`;
  try {
    yield call(axios.delete, URL);
    yield put({ type: DELETE_POST_SUCCESS });
    yield put({ type: FETCH_POSTS_REQUESTED });
  } catch (err) {
    yield put({ type: DELETE_POST_FAILED, message: 'Failed to delete' });
  }
}

export function* editPost(action) {
  yield put(push(`/admin/post/${action.id.id}`));
}

export function* postsWatcher() {
  const watcher = yield takeLatest(FETCH_POSTS_REQUESTED, fetchPosts);
  const deleteWatcher = yield takeLatest(DELETE_CONFIRMED, deletePost);
  const editWatcher = yield takeLatest(EDIT_REQUESTED, editPost);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(deleteWatcher);
  yield cancel(editWatcher);
}

export default [
  postsWatcher,
];
