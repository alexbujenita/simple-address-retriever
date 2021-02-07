import {
  ADD_ADDRESS,
  ADD_ADDRESS_ERROR,
  FETCH_ADDRESS,
} from "../actions/getAddress";
import { call, put, takeLatest } from "redux-saga/effects";
import fetchComponent from "../utils/fetchComponent";

export function* watchForFetchAddress() {
  yield takeLatest(FETCH_ADDRESS, fetchAddress);
}

export function* fetchAddress(action) {
  try {
    const { addresses } = yield call(fetchComponent, action.address);
    yield put({
      type: ADD_ADDRESS,
      addresses,
    });
  } catch (error) {
    yield put({
      type: ADD_ADDRESS_ERROR,
      message: error.message.split(" ").includes("400")
        ? "Invalid postcode"
        : "Service currently unavailable",
    });
  }
}
