import axios from 'axios';
import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { USER_LOGOUT } from 'containers/LoginPage/constants';
import { HOST } from 'constants/host';
import {
  USER_LOGOUT_REQUEST,
  DRAWER_LINK_CLICKED,
  TOGGLE_DRAWER,
  AUTHENTIFICATION_CHECK,
  STORE_USER,
  AUTHENTIFICATION_FAILED,
 } from './constants';

export function* logout() {
  try {
    yield call(localStorage.clear());
  } catch (e) {
    console.log('error');
  }
  yield put(push('/admin/login'));
  yield put({ type: USER_LOGOUT, error: 'User logged out' });
}
export function* redirect(action) {
  yield put({ type: TOGGLE_DRAWER, state: false });
  yield put(push(action.url));
}

export function* authCheck() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  try {
    const URL = `${HOST}api/users/${userId}?access_token=${token}`;
    const user = yield call(axios.get, URL);
    yield put({ type: STORE_USER, user: user.data });
  } catch (e) {
    yield put({ type: AUTHENTIFICATION_FAILED });
    yield put(push('/admin/login'));
    localStorage.clear();
  }
}

export function* adminWatcher() {
  const logoutWatcher = yield takeLatest(USER_LOGOUT_REQUEST, logout);
  const linkWatcher = yield takeLatest(DRAWER_LINK_CLICKED, redirect);
  const authCheckWatcher = yield takeLatest(AUTHENTIFICATION_CHECK, authCheck);
  yield take(LOCATION_CHANGE);
  yield cancel(logoutWatcher);
  yield cancel(linkWatcher);
  yield cancel(authCheckWatcher);
}

export default [
  adminWatcher,
];
