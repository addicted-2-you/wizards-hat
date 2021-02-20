import { put, takeEvery } from 'redux-saga/effects';

import { EAppStages } from 'constants/EAppStages';

import { hideMenu, hideSpinner, showSpinner } from 'store/action-creators/app.action-creators';
import { EAppActionTypes } from 'store/action-types/app.action-types';
import { ISetGameMode } from 'store/actions/app.actions';
import { hideTerminal, showTerminal } from 'store/action-creators/terminal.action-creators';
import { showOpponentField } from 'store/action-creators/game.action-creators';

function* changeAppStageWorker(action: ISetGameMode) {
  if (action.appStage === EAppStages.APP_START) {
    yield put(hideSpinner());
    yield put(hideTerminal());
  } else if (action.appStage === EAppStages.ONLINE_GAME_SEARCH) {
    yield put(showSpinner());
    yield put(hideMenu());
    yield put(hideTerminal());
  } else if (action.appStage === EAppStages.GAME_IN_PROGRESS) {
    yield put(hideSpinner());
    yield put(showTerminal());
    yield put(showOpponentField());
  }
}

export function* watchChangeAppStage() {
  yield takeEvery(EAppActionTypes.SET_APP_STAGE, changeAppStageWorker);
}
