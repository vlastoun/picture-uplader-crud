import { take, takeLatest, put, cancel, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { PUT_ERROR } from 'containers/HomePage/constants';
import { HOST } from 'constants/host';
import { FETCH_POST, STORE_POST, LOAD_DATA, FETCH_PICTURES, STORE_PICTURES } from './constants';

export function* fetchPost(action) {
  const URL = `${HOST}api/posts/${action.postId}`;
  try {
    const result = yield call(axios.get, URL);
    yield put({ type: STORE_POST, data: result.data });
  } catch (error) {
    yield put({ type: PUT_ERROR, message: error });
  }
}

export function* fetchPictures(action) {
  const URL = `${HOST}api/posts/${action.postId}/cloudinaries`;
  try {
    const result = yield call(axios.get, URL);
    yield put({ type: STORE_PICTURES, data: result.data });
  } catch (error) {
    yield put({ type: PUT_ERROR, message: error });
  }
}

export function* loadData(action) {
  yield put({ type: FETCH_POST, postId: action.postId });
  yield put({ type: FETCH_PICTURES, postId: action.postId });
}

export function* postWatcher() {
  const fetchWatcher = yield takeLatest(LOAD_DATA, loadData);
  const fetchPostWatcher = yield takeLatest(FETCH_POST, fetchPost);
  const fetchPicWatcher = yield takeLatest(FETCH_PICTURES, fetchPictures);
  yield take(LOCATION_CHANGE);
  cancel(fetchWatcher);
  cancel(fetchPostWatcher);
  cancel(fetchPicWatcher);
}

// Bootstrap sagas
export default [
  postWatcher,
];
