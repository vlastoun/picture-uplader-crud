import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  SEND_POST_REQUESTED,
 } from './constants';

const TOKEN = localStorage.getItem('token');

export function* newPostRequest(action) {
  console.log(action.content.currentEditorState);
  console.log(action.content.data.toJS());
}

export function* postWatcher() {
  const watcher = yield takeLatest(SEND_POST_REQUESTED, newPostRequest);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  postWatcher,
];
