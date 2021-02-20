import { CFieldCell } from 'models/CFieldCell';

import { EGameActionTypes } from 'store/action-types/game.action-types';

export interface IInitSingleGame {
  type: EGameActionTypes.INIT_SINGLE_GAME;
}

export interface IInitOnlineGame {
  type: EGameActionTypes.INIT_ONLINE_GAME;
}

export interface IMakeMove {
  type: EGameActionTypes.MAKE_MOVE;
  move: string;
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

export type TGameAction =
  | IInitSingleGame
  | IInitOnlineGame
  | IMakeMove
  | IInitOwnField
  | ISetOwnField
  | IShowOpponentField
  | IHideOpponentField;
