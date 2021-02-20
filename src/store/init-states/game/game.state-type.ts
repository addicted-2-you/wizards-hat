import { CFieldCell } from 'models/CFieldCell';

export interface IGameState {
  ownField: CFieldCell[];
  opponentsField: CFieldCell[];
  isOpponentsFieldVisible: boolean;
}
