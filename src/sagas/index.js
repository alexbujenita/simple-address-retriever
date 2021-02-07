import { fork, all } from "redux-saga/effects";
import { watchForFetchAddress } from "./getAddress";

export default function* rootSaga() {
  yield all([fork(watchForFetchAddress)]);
}
