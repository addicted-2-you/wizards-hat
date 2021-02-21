import { CFieldCell } from 'models/CFieldCell';
import { EGameStages } from 'models/EGameStages';

export interface IGameState {
  ownField: CFieldCell[];
  opponentsField: CFieldCell[];
  isOpponentsFieldVisible: boolean;
  gameStage: EGameStages;
  isCurrentUserTurn: boolean;
  secondsLeft: number;
}
