import { CFieldCell } from 'models/CFieldCell';
import { EGameStatuses } from 'models/EGameStatuses';

export interface IGameState {
  ownField: CFieldCell[];
  opponentsField: CFieldCell[];
  isOpponentsFieldVisible: boolean;
  gameStatus: EGameStatuses;
}
