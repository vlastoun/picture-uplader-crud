import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { USER_LOGIN, USER_STORE, USER_LOGIN_FAILED, RESET_FIELDS } from './constants';

export function* loginUser(action) {
  const user = action.user.toJS();
  const URL = 'http://localhost:8080/api/users/login';
  try {
    const response = yield call(axios.post, URL, user);
    yield put({ type: USER_STORE, user: response.data });
  } catch (err) {
    yield put({ type: USER_LOGIN_FAILED, error: 'Wrong password or username' });
  }
}

export function* resetError() {
  yield put({ type: RESET_FIELDS, error: null });
}

export function* loginWatcher() {
  const watcher = yield takeLatest(USER_LOGIN, loginUser);
  const resetErrorWatcher = yield takeLatest(RESET_FIELDS, resetError);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(resetErrorWatcher);
}

export default [
  loginWatcher,
];
