import { TGameAction } from 'store/actions/game.actions';
import { gameInitState, IGameState } from 'store/init-states/game';

export default (state: IGameState = gameInitState, action: TGameAction) => {
  switch (action) {
    default: {
      return state;
    }
  }
};
