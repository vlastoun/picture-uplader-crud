import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import winston from 'winston';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  SEND_POST_REQUESTED,
  NEW_POST_REQUESTED,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
  POST_CREATED,
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

/* eslint-disable no-param-reassign*/

export function* newPostRequest(action) {
  const { currentEditorState, data, user, images } = action.content;
  const jsData = data.toJS();
  const jsImage = images.toJS();
  const postURL = `${HOST}api/posts?access_token=${TOKEN}`;
  const postImageURL = `${HOST}api/cloudinaries?access_token=${TOKEN}`;
  const toPost = {
    title: jsData.title,
    description: jsData.description,
    body: JSON.stringify(currentEditorState),
    userId: user.id,
    categoryId: jsData.categoryId,
  };
  try {
    const response = yield call(axios.post, postURL, toPost);
    if (jsImage.size > 0) {
      jsImage.forEach((image) => {
        image.postId = response.data.id;
        image.userId = user.id;
        image.categoryId = jsData.categoryId;
      });
      yield jsImage.map((image) => call(axios.post, postImageURL, image));
    }
    yield put({ type: POST_CREATED });
  } catch (err) {
    winston.log('warning', err);
  }
}
export function* redirect() {
  yield put(push('/admin/posts'));
}

export function* postWatcher() {
  const watcher = yield takeLatest(SEND_POST_REQUESTED, newPostRequest);
  const watcherFetchCategories = yield takeLatest(NEW_POST_REQUESTED, fetchCategories);
  const redirectWatcher = yield takeLatest(POST_CREATED, redirect);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(watcherFetchCategories);
  yield cancel(redirectWatcher);
}

export default [
  postWatcher,
];
