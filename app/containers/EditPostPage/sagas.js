import { take, call, cancel, takeLatest, put, takeEvery, select } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  FETCH_CATEGORIES_REQUESTED,
  FETCH_POST_REQUESTED,
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_POST_FAILED,
  FETCH_POST_SUCCESS,
  FETCH_IMAGES_REQUESTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILED,
  OLD_IMAGE_DEL_REQ,
  OLD_IMAGE_DELETE,
  ADD_IMAGE_TO_STASH,
  EDIT_POST_REQUESTED,
  POST_EDIT_SUCCESS,
  POST_EDIT_FAILED,
  DELETE_UNUSED_IMAGES,
  IMAGE_DELETE,
 } from './constants';

const TOKEN = localStorage.getItem('token');
const selectState = (state) => state.toJS();

export function* fetchCategories() {
  const URL = `${HOST}api/categories?access_token=${TOKEN}`;
  try {
    const response = yield call(axios.get, URL);
    yield put({ type: FETCH_CATEGORIES_SUCCESS, data: response.data });
  } catch (err) {
    yield put({ type: FETCH_CATEGORIES_FAILED, message: err.response.data.error.message });
  }
}

export function* fetchImages(action) {
  const IMAGES_URL = `${HOST}api/posts/${action.postId}/cloudinaries?access_token=${TOKEN}`;
  try {
    const response = yield call(axios.get, IMAGES_URL);
    yield put({ type: FETCH_IMAGES_SUCCESS, data: response.data });
  } catch (err) {
    yield put({ type: FETCH_IMAGES_FAILED, message: err.response.data.error.message });
  }
}


/* eslint-disable no-param-reassign*/

export function* fetchPostRequest(action) {
  yield put({ type: FETCH_CATEGORIES_REQUESTED });
  yield put({ type: FETCH_IMAGES_REQUESTED, postId: action.postId });
  const URL = `${HOST}api/posts/${action.postId}?access_token=${TOKEN}`;
  try {
    const response = yield call(axios.get, URL);
    yield put({ type: FETCH_POST_SUCCESS, data: response.data });
  } catch (err) {
    yield put({ type: FETCH_POST_FAILED, message: err.response.data.error.message });
  }
}
export function* redirect() {
  yield put(push('/admin/posts'));
}

export function* deleteImage(action) {
  // const URL = ;
  // yield call(axios.post, URL);
  yield put({ type: ADD_IMAGE_TO_STASH, id: action.id });
  yield put({ type: OLD_IMAGE_DELETE, id: action.id });
}

export function* editPost(action) {
  const { content } = action;
  const toPost = {
    title: content.data.title,
    description: content.data.description,
    categoryId: content.data.categoryId,
    body: content.data.body,
    date: content.data.date,
  };
  const state = yield select(selectState);
  const images = state.editPost.images;
  try {
    const postImageURL = `${HOST}api/cloudinaries?access_token=${TOKEN}`;
    const URL = `${HOST}api/posts/${content.data.id}?access_token=${TOKEN}`;
    const response = yield call(axios.patch, URL, toPost);
    yield put({ type: DELETE_UNUSED_IMAGES, imagesToDelete: state.editPost.imagesToDelete });
    if (images.length > 0) {
      images.forEach((image) => {
        image.postId = response.data.id;
        image.userId = response.data.userId;
        image.categoryId = response.categoryId;
      });
      yield images.map((image) => call(axios.post, postImageURL, image));
    }
    yield put({ type: POST_EDIT_SUCCESS, data: response.data });
    yield put(push('/admin/posts'));
  } catch (error) {
    yield put({ type: POST_EDIT_FAILED, message: error });
  }
}

export function* deleteUnusedImages(action) {
  const toDelete = action.imagesToDelete;
  yield toDelete.map((image) => call(axios.post, `${HOST}api/cloudinaries/delete-image?imageId=${image}&access_token=${TOKEN}`));
}

export function* imageDeleteFromServer(action) {
  yield call(axios.post, `${HOST}api/cloudinaries/direct-remove?publicId=${action.id}&access_token=${TOKEN}`);
}

export function* postWatcher() {
  const watcher = yield takeLatest(FETCH_POST_REQUESTED, fetchPostRequest);
  const catWatcher = yield takeLatest(FETCH_CATEGORIES_REQUESTED, fetchCategories);
  const imaWatcher = yield takeLatest(FETCH_IMAGES_REQUESTED, fetchImages);
  const oldWatcher = yield takeLatest(OLD_IMAGE_DEL_REQ, deleteImage);
  const editPostWatcher = yield takeLatest(EDIT_POST_REQUESTED, editPost);
  const mergeWatcher = yield takeLatest(DELETE_UNUSED_IMAGES, deleteUnusedImages);
  const imgDeleteWatcher = yield takeEvery(IMAGE_DELETE, imageDeleteFromServer);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(catWatcher);
  yield cancel(imaWatcher);
  yield cancel(oldWatcher);
  yield cancel(editPostWatcher);
  yield cancel(mergeWatcher);
  yield cancel(imgDeleteWatcher);
}

export default [
  postWatcher,
];
