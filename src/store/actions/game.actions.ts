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

export type TGameAction =
  | IInitSingleGame
  | IInitOnlineGame
  | IMakeMove
  | IInitOwnField
  | ISetOwnField;
