import { CFieldCell } from 'models/CFieldCell';
import { EGameStatuses } from 'models/EGameStatuses';

import { EGameActionTypes } from 'store/action-types/game.action-types';
import * as GameActions from 'store/actions/game.actions';

export const initSingleGame = (): GameActions.IInitSingleGame => ({
  type: EGameActionTypes.INIT_SINGLE_GAME,
});

export const initOnlneGame = (): GameActions.IInitOnlineGame => ({
  type: EGameActionTypes.INIT_ONLINE_GAME,
});

export const initOwnField = (): GameActions.IInitOwnField => ({
  type: EGameActionTypes.INIT_OWN_FIELD,
});

export const setOwnField = (ownField: CFieldCell[]): GameActions.ISetOwnField => ({
  type: EGameActionTypes.SET_OWN_FIELD,
  ownField,
});

// UI elements visibility
export const showOpponentField = (): GameActions.IShowOpponentField => ({
  type: EGameActionTypes.SHOW_OPPONENT_FIELD,
});

export const hideOpponentField = (): GameActions.IHideOpponentField => ({
  type: EGameActionTypes.HIDE_OPPONENT_FIELD,
});

// flow
export const sendSpell = (spellAction: Object): GameActions.ISendSpell => ({
  type: EGameActionTypes.SEND_SPELL,
  spellAction,
});

export const setGameStatus = (gameStatus: EGameStatuses): GameActions.ISetGameStatus => ({
  type: EGameActionTypes.SET_GAME_STATUS,
  gameStatus,
});

// spells
export const destroyOwnCell = (column: number, row: number): GameActions.IDestroyOwnCell => ({
  type: EGameActionTypes.DESTROY_OWN_CELL,
  column,
  row,
});
