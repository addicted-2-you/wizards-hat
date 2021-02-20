import { EventChannel } from 'redux-saga';
import { call, cancel, fork, put, take, takeEvery } from 'redux-saga/effects';

import { ESocketEvents } from 'constants/ws.events';

import { hideMenu, showSpinner } from 'store/action-creators/app.action-creators';
import { setOwnField } from 'store/action-creators/game.action-creators';
import { EGameActionTypes } from 'store/action-types/game.action-types';

import { generateOwnGameField } from 'utils/game.utils';
import { createDuplexConnection } from 'utils/socket.utils';

// workers
function* initGameWorker() {
  const ownField = yield call(generateOwnGameField);
  yield put(setOwnField(ownField));
}

function* initSingleGameWorker() {
  yield call(initGameWorker);
  yield put(hideMenu());
}

function* listeningSocketWorker(channel: EventChannel<unknown>) {
  while (true) {
    const anotherMoveAction = yield take(channel);

    yield put(anotherMoveAction);
  }
}

// watchers
export function* watchInitOwnField() {
  yield takeEvery(EGameActionTypes.INIT_OWN_FIELD, initGameWorker);
}

export function* watchInitSingleGame() {
  yield takeEvery(EGameActionTypes.INIT_SINGLE_GAME, initSingleGameWorker);
}

export function* watchOnlineGame() {
  while (yield take(EGameActionTypes.INIT_ONLINE_GAME)) {
    yield put(hideMenu());
    yield put(showSpinner());

    const { channel, socket } = yield call(createDuplexConnection);
    const listeningSocketTask = yield fork(listeningSocketWorker, channel);

    const watchingActions = [EGameActionTypes.SEND_SPELL, EGameActionTypes.LEAVE_ONLINE_GAME];
    for (let action = yield take(watchingActions); action; action = yield take(watchingActions)) {
      if (action.type === EGameActionTypes.SEND_SPELL) {
        socket.emit(ESocketEvents.SEND_SPELL, action.spellAction);
      } else if (action.type === EGameActionTypes.LEAVE_ONLINE_GAME) {
        yield cancel(listeningSocketTask);
        break;
      }
    }
  }
}
