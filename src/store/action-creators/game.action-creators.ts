import { CFieldCell } from 'models/CFieldCell';

import { EGameActionTypes } from 'store/action-types/game.action-types';
import * as GameActions from 'store/actions/game.actions';

export const initSingleGame = (): GameActions.IInitSingleGame => ({
  type: EGameActionTypes.INIT_SINGLE_GAME,
});

export const initOwnField = (): GameActions.IInitOwnField => ({
  type: EGameActionTypes.INIT_OWN_FIELD,
});

export const setOwnField = (ownField: CFieldCell[]): GameActions.ISetOwnField => ({
  type: EGameActionTypes.SET_OWN_FIELD,
  ownField,
});
