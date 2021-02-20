import { CFieldCell } from 'models/CFieldCell';

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
  // spells
  | IDestroyOwnCell;
