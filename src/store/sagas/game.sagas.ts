import { EventChannel } from 'redux-saga';
import { call, cancel, fork, put, select, take, takeEvery } from 'redux-saga/effects';

import { ESocketEvents } from 'constants/ws.events';

import { hideMenu, showSpinner } from 'store/action-creators/app.action-creators';
import { setOwnField, setGameStatus } from 'store/action-creators/game.action-creators';
import { EGameActionTypes } from 'store/action-types/game.action-types';

import { generateOwnGameField } from 'utils/game.utils';
import { createDuplexConnection } from 'utils/socket.utils';
import { EGameStatuses } from 'models/EGameStatuses';

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

function* checkGameStatusWorker() {
  const {
    gameState: { ownField },
  } = yield select();

  const nonDestroyedBuilding = ownField.find((cell) => cell.hasNonDestroyedBuilding());
  if (!nonDestroyedBuilding) {
    yield put(setGameStatus(EGameStatuses.LOSE));
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

    yield put(setGameStatus(EGameStatuses.IN_PROGRESS));

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

export function* watchGameStatus() {
  const watchingActions = [EGameActionTypes.DESTROY_OWN_CELL];
  yield takeEvery(watchingActions, checkGameStatusWorker);
}
