import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import { CREATE_USER, CREATE_USER_FAILED, CREATE_USER_SUCCESSFUL } from './constants';


export function* postUser(action) {
  const user = action.user.toJS();
  const { username, email, password } = user;
  const topost = { username, email, password };
  const URL = `${HOST}api/users`;
  try {
    const response = yield call(axios.post, URL, topost);
    yield put({ type: CREATE_USER_SUCCESSFUL, data: response.data });
  } catch (err) {
    yield put({ type: CREATE_USER_FAILED, message: err.response.data.error.details.messages });
  }
}

export function* redirect() {
  yield put(push('/admin/login'));
}

export function* userWatcher() {
  const watcher = yield takeLatest(CREATE_USER, postUser);
  const redirectWatcher = yield takeLatest(CREATE_USER_SUCCESSFUL, redirect);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(redirectWatcher);
}

export default [
  userWatcher,
];
