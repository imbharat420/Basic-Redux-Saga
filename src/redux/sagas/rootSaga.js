import { takeLatest } from "redux-saga/effects"
import { handleGetUser } from "./handlers/user.js"
import { GET_USER } from "../ducks/user.js"

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}

