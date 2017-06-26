import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { USER_LOGOUT } from 'containers/LoginPage/constants';
import {
  USER_LOGOUT_REQUEST,
  DRAWER_LINK_CLICKED,
  TOGGLE_DRAWER,
 } from './constants';

export function* logout() {
  try {
    yield call(localStorage.removeItem('token'));
    yield call(localStorage.removeItem('userId'));
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

export function* adminWatcher() {
  const logoutWatcher = yield takeLatest(USER_LOGOUT_REQUEST, logout);
  const linkWatcher = yield takeLatest(DRAWER_LINK_CLICKED, redirect);
  yield take(LOCATION_CHANGE);
  yield cancel(logoutWatcher);
  yield cancel(linkWatcher);
}

export default [
  adminWatcher,
];
