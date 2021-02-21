import { CFieldCell } from 'models/CFieldCell';
import { EGameStages } from 'models/EGameStages';

import { TStore } from 'store';

export const selectOwnGameField = (store: TStore): CFieldCell[] => store.gameState.ownField;

export const selectOpponentsGameField = (store: TStore): CFieldCell[] =>
  store.gameState.opponentsField;

export const selectOpponentsGameFieldVisibility = (store: TStore): boolean =>
  store.gameState.isOpponentsFieldVisible;

export const selectGameStage = (store: TStore): EGameStages => store.gameState.gameStage;

export const selectIsCurrentUserTurn = (store: TStore): boolean =>
  store.gameState.isCurrentUserTurn;

export const selectSecondsLeft = (store: TStore): number => store.gameState.secondsLeft;
