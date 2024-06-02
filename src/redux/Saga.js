import { all } from "redux-saga/effects";
import UsersSaga from "./Users/Users.saga";


export default function* rootSaga() {
  yield all([
    UsersSaga()
  ])
}