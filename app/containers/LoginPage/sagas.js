import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCESSFULL } from './constants';

export function* loginUser(action) {
  const user = action.user.toJS();
  const URL = `${HOST}api/users/login`;
  try {
    const response = yield call(axios.post, URL, user);
    localStorage.setItem('token', `${response.data.id}`);
    localStorage.setItem('userId', `${response.data.userId}`);
    yield put({ type: USER_LOGIN_SUCESSFULL });
  } catch (err) {
    yield put({ type: USER_LOGIN_FAILED, error: 'Wrong password or username' });
  }
}

export function* redirect() {
  yield put(push('/admin'));
}

export function* loginWatcher() {
  const watcher = yield takeLatest(USER_LOGIN, loginUser);
  const redirectWatcher = yield takeLatest(USER_LOGIN_SUCESSFULL, redirect);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(redirectWatcher);
}

export default [
  loginWatcher,
];
