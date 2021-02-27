import { put } from "redux-saga/effects";
import { call } from "typed-redux-saga";

import HeroService from "../../../services/hero-services";

import { loadHeroSuccess, loadHeroFailure } from "./actions"

export function* getSuper(action: any):any{

  try {
    const response: any = yield call(HeroService.getSuper, action.payload);
    yield put(loadHeroSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loadHeroFailure());
  }
}
