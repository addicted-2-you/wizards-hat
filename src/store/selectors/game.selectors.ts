import { CFieldCell } from 'models/CFieldCell';
import { EGameStatuses } from 'models/EGameStatuses';

import { TStore } from 'store';

export const selectOwnGameField = (store: TStore): CFieldCell[] => store.gameState.ownField;

export const selectOpponentsGameField = (store: TStore): CFieldCell[] =>
  store.gameState.opponentsField;

export const selectOpponentsGameFieldVisibility = (store: TStore): boolean =>
  store.gameState.isOpponentsFieldVisible;

export const selectGameStatus = (store: TStore): EGameStatuses => store.gameState.gameStatus;
