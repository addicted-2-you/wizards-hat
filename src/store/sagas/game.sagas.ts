import { END, eventChannel, EventChannel } from 'redux-saga';
import { call, cancel, fork, put, select, take, takeEvery } from 'redux-saga/effects';

import { ESocketEvents } from 'constants/ws.events';

import { EGameStages } from 'models/EGameStages';

import { hideMenu, showSpinner } from 'store/action-creators/app.action-creators';
import {
  setOwnField,
  setGameStatus,
  sendAction,
  setIsCurrentUserTurn,
  setSecondsLeft,
} from 'store/action-creators/game.action-creators';
import { EGameActionTypes } from 'store/action-types/game.action-types';

import { generateOwnGameField } from 'utils/game.utils';
import { createDuplexConnection } from 'utils/socket.utils';
import { TURN_TIME_LIMIT_S } from 'constants/game.constants';
import { MS_IN_SECOND } from 'constants/core.constants';

function countdownHelper(countdownHelperTime = TURN_TIME_LIMIT_S) {
  let secondsLeft = countdownHelperTime;
  return eventChannel((emimtter) => {
    const intervalId = setInterval(() => {
      secondsLeft -= 1;
      if (secondsLeft > 0) {
        emimtter(secondsLeft);
      } else {
        emimtter(END);
      }
    }, MS_IN_SECOND);

    return () => {
      clearInterval(intervalId);
    };
  });
}

// workers
function* initGameWorker() {
  const ownField = yield call(generateOwnGameField);
  yield put(setOwnField(ownField));
  yield put(setGameStatus(EGameStages.IN_PROGRESS));
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
    yield put(setGameStatus(EGameStages.LOSE));
  }
}

function* currentUserTurnTimeWorker() {
  const countdownHelperChannel = yield call(countdownHelper, TURN_TIME_LIMIT_S);
  try {
    while (true) {
      const secondsLeft = yield take(countdownHelperChannel);
      yield put(setSecondsLeft(secondsLeft));
    }
  } finally {
    const {
      gameState: { isCurrentUserTurn },
    } = yield select();

    yield put(setIsCurrentUserTurn(!isCurrentUserTurn));
    yield put(sendAction(setIsCurrentUserTurn(isCurrentUserTurn)));
    yield put(setSecondsLeft(TURN_TIME_LIMIT_S));
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

    const watchingActions = [
      EGameActionTypes.SEND_SPELL,
      EGameActionTypes.SEND_ACTION,
      EGameActionTypes.LEAVE_ONLINE_GAME,
    ];

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

export function* watchSettingCurrentUserTurn() {
  yield takeEvery(EGameActionTypes.SET_IS_CURRENT_USER_TURN, currentUserTurnTimeWorker);
}
