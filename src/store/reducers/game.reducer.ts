import { EGameActionTypes } from 'store/action-types/game.action-types';
import { TGameAction } from 'store/actions/game.actions';
import { gameInitState, IGameState } from 'store/init-states/game';

export default (state: IGameState = gameInitState, action: TGameAction): IGameState => {
  switch (action.type) {
    case EGameActionTypes.SET_OWN_FIELD: {
      const { ownField } = action;

      return { ...state, ownField };
    }
    default: {
      return state;
    }
  }
};
