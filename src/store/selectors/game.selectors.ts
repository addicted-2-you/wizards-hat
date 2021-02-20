import { CFieldCell } from 'models/CFieldCell';

import { TStore } from 'store';

export const selectOwnGameField = (store: TStore): CFieldCell[] => store.gameState.ownField;

export const selectOpponentsGameField = (store: TStore): CFieldCell[] =>
  store.gameState.opponentsField;

export const selectOpponentsGameFieldVisibility = (store: TStore): boolean =>
  store.gameState.isOpponentsFieldVisible;
