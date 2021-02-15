import { call, put, takeEvery } from 'redux-saga/effects';
import { hideMenu } from 'store/action-creators/app.action-creators';
import { setOwnField } from 'store/action-creators/game.action-creators';

import { EGameActionTypes } from 'store/action-types/game.action-types';

import { generateOwnGameField } from 'utils/game.utils';

// workers
function* initSingleGameWorker() {
  const ownField = yield call(generateOwnGameField);
  yield put(setOwnField(ownField));
  yield put(hideMenu());
}

// watchers
export function* watchInitSingleGame() {
  yield takeEvery(EGameActionTypes.INIT_SINGLE_GAME, initSingleGameWorker);
}
