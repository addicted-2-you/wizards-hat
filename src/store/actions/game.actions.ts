import { CFieldCell } from 'models/CFieldCell';
import { EGameStatuses } from 'models/EGameStatuses';

import { EGameActionTypes } from 'store/action-types/game.action-types';

export interface IInitSingleGame {
  type: EGameActionTypes.INIT_SINGLE_GAME;
}

export interface IInitOnlineGame {
  type: EGameActionTypes.INIT_ONLINE_GAME;
}

export interface IInitOwnField {
  type: EGameActionTypes.INIT_OWN_FIELD;
}

export interface ISetOwnField {
  type: EGameActionTypes.SET_OWN_FIELD;
  ownField: CFieldCell[];
}

// UI elements visibility
export interface IShowOpponentField {
  type: EGameActionTypes.SHOW_OPPONENT_FIELD;
}

export interface IHideOpponentField {
  type: EGameActionTypes.HIDE_OPPONENT_FIELD;
}

// flow
export interface ISendSpell {
  type: EGameActionTypes.SEND_SPELL;
  spellAction: Object;
}

export interface ISetGameStatus {
  type: EGameActionTypes.SET_GAME_STATUS;
  gameStatus: EGameStatuses;
}

// spells
export interface IDestroyOwnCell {
  type: EGameActionTypes.DESTROY_OWN_CELL;
  column: number;
  row: number;
}

export type TGameAction =
  | IInitSingleGame
  | IInitOnlineGame
  | IInitOwnField
  | ISetOwnField
  | IShowOpponentField
  | IHideOpponentField
  // flow
  | ISendSpell
  | ISetGameStatus
  // spells
  | IDestroyOwnCell;
