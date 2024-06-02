import { put, takeEvery } from 'redux-saga/effects';
import { GET_USERS, GET_USERS_SUCCESS, CREATE_USERS, CREATE_USERS_SUCCESS, DELETED_USERS_SUCCESS, SINGLE_USERS_SUCCESS, UPDATE_USERS_SUCCESS, DELETED_USERS, SINGLE_USERS, UPDATE_USERS } from '../Type';

function* Users(action) {
  yield put({
    type: GET_USERS_SUCCESS,
    payload: action.payload
  })
}

function* CreateUsers(action) {
  yield put({
    type: CREATE_USERS_SUCCESS,
    payload: action.payload
  })
}

function* DeletedUsers(action) {
  yield put({
    type: DELETED_USERS_SUCCESS,
    payload: action.payload
  })
}

function* SingleUsers(action) {
  yield put({
    type: SINGLE_USERS_SUCCESS,
    payload: action.payload
  })
}

function* UpdatedUsers(action) {
  yield put({
    type: UPDATE_USERS_SUCCESS,
    payload: action.payload,
  })
}

export default function* UsersSaga() {
  yield takeEvery(GET_USERS, Users);
  yield takeEvery(CREATE_USERS, CreateUsers);
  yield takeEvery(DELETED_USERS, DeletedUsers);
  yield takeEvery(SINGLE_USERS, SingleUsers);
  yield takeEvery(UPDATE_USERS, UpdatedUsers);
}