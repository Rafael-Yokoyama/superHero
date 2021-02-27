import {  takeLatest, all } from "@redux-saga/core/effects"
import { getSuper } from "./heroes/saga"
import { SuperTypes } from "./heroes/types"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(SuperTypes.GET_HERO_REQUEST, getSuper)
  ])
}