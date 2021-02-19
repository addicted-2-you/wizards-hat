import { put, take } from 'redux-saga/effects';
import { makeMove } from 'store/action-creators/game.action-creators';

import { addToHistory } from 'store/action-creators/terminal.action-creators';
import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';

export function* watchSpelling() {
  while (true) {
    const action = yield take(ETerminalActionTypes.CAST_SPELL);

    // TODO: add parsing spell -> running spell
    yield put(makeMove(action.spell));
    yield put(addToHistory(action.spell));
  }
}
