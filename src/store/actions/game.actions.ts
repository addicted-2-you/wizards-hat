import { CFieldCell } from 'models/CFieldCell';

import { EGameActionTypes } from 'store/action-types/game.action-types';

export interface IInitSingleGame {
  type: EGameActionTypes.INIT_SINGLE_GAME;
}

export interface IInitOwnField {
  type: EGameActionTypes.INIT_OWN_FIELD;
}

export interface ISetOwnField {
  type: EGameActionTypes.SET_OWN_FIELD;
  ownField: CFieldCell[];
}

export type TGameAction = IInitSingleGame | IInitOwnField | ISetOwnField;
