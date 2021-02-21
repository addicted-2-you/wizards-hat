import { GAME_FIELD_SIZE, TURN_TIME_LIMIT_S } from 'constants/game.constants';

import { EGameStages } from 'models/EGameStages';

import { generateEmptyGameField } from 'utils/game.utils';

import { IGameState } from './game.state-type';

export const gameInitState: IGameState = {
  ownField: generateEmptyGameField(GAME_FIELD_SIZE),
  opponentsField: generateEmptyGameField(GAME_FIELD_SIZE),
  isOpponentsFieldVisible: false,
  gameStage: EGameStages.NOT_STARTED,
  isCurrentUserTurn: false,
  secondsLeft: TURN_TIME_LIMIT_S,
};
