import { EGameActionTypes } from 'store/action-types/game.action-types';
import { TGameAction } from 'store/actions/game.actions';
import { gameInitState, IGameState } from 'store/init-states/game';

export default (state: IGameState = gameInitState, action: TGameAction): IGameState => {
  switch (action.type) {
    case EGameActionTypes.SET_OWN_FIELD: {
      const { ownField } = action;
      return { ...state, ownField };
    }
    case EGameActionTypes.SHOW_OPPONENT_FIELD: {
      return { ...state, isOpponentsFieldVisible: true };
    }
    case EGameActionTypes.HIDE_OPPONENT_FIELD: {
      return { ...state, isOpponentsFieldVisible: false };
    }
    default: {
      return state;
    }
  }
};
