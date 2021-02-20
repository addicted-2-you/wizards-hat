import { GAME_FIELD_SIZE } from 'constants/game.constants';
import { EGameStatuses } from 'models/EGameStatuses';

import { generateEmptyGameField } from 'utils/game.utils';

import { IGameState } from './game.state-type';

export const gameInitState: IGameState = {
  ownField: generateEmptyGameField(GAME_FIELD_SIZE),
  opponentsField: generateEmptyGameField(GAME_FIELD_SIZE),
  isOpponentsFieldVisible: false,
  gameStatus: EGameStatuses.NOT_STARTED,
};
