import { CFieldCell } from 'models/CFieldCell';

import { EGameActionTypes } from 'store/action-types/game.action-types';
import * as GameActions from 'store/actions/game.actions';

export const initSingleGame = (): GameActions.IInitSingleGame => ({
  type: EGameActionTypes.INIT_SINGLE_GAME,
});

export const initOnlneGame = (): GameActions.IInitOnlineGame => ({
  type: EGameActionTypes.INIT_ONLINE_GAME,
});

export const makeMove = (move: string): GameActions.IMakeMove => ({
  type: EGameActionTypes.MAKE_MOVE,
  move,
});

export const initOwnField = (): GameActions.IInitOwnField => ({
  type: EGameActionTypes.INIT_OWN_FIELD,
});

export const setOwnField = (ownField: CFieldCell[]): GameActions.ISetOwnField => ({
  type: EGameActionTypes.SET_OWN_FIELD,
  ownField,
});
