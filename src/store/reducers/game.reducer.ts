import { CFieldCell } from 'models/CFieldCell';

import { EGameActionTypes } from 'store/action-types/game.action-types';
import { TGameAction } from 'store/actions/game.actions';
import { gameInitState, IGameState } from 'store/init-states/game';

export default (state: IGameState = gameInitState, action: TGameAction): IGameState => {
  switch (action.type) {
    case EGameActionTypes.SET_OWN_FIELD: {
      return { ...state, ownField: action.ownField };
    }
    case EGameActionTypes.SHOW_OPPONENT_FIELD: {
      return { ...state, isOpponentsFieldVisible: true };
    }
    case EGameActionTypes.HIDE_OPPONENT_FIELD: {
      return { ...state, isOpponentsFieldVisible: false };
    }
    // flow
    case EGameActionTypes.SET_GAME_STATUS: {
      return { ...state, gameStage: action.gameStage };
    }
    case EGameActionTypes.SET_IS_CURRENT_USER_TURN: {
      return { ...state, isCurrentUserTurn: action.isCurrentUserTurn };
    }
    case EGameActionTypes.SET_SECONDS_LEFT: {
      return { ...state, secondsLeft: action.secondsLeft };
    }
    // spells
    case EGameActionTypes.DESTROY_OWN_CELL: {
      const { column, row } = action;
      const { ownField } = state;

      return {
        ...state,
        ownField: ownField.map((cell) =>
          cell.xCoord === Number(column) && cell.yCoord === Number(row)
            ? new CFieldCell({ ...cell, isDestroyed: true })
            : cell,
        ),
      };
    }
    default: {
      return state;
    }
  }
};
