import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';
import { TTerminalAction } from 'store/actions/terminal.actions';
import { ITerminalState, terminalInitState } from 'store/init-states/terminal';

export default (
  state: ITerminalState = terminalInitState,
  action: TTerminalAction,
): ITerminalState => {
  switch (action.type) {
    // terminal visibility
    case ETerminalActionTypes.SHOW_TERMINAL: {
      return { ...state, isTerminalVisible: true };
    }
    case ETerminalActionTypes.HIDE_TERMINAL: {
      return { ...state, isTerminalVisible: false };
    }
    case ETerminalActionTypes.TOGGLE_TERMINAL: {
      const { isTerminalVisible } = state;

      return { ...state, isTerminalVisible: !isTerminalVisible };
    }
    case ETerminalActionTypes.ADD_TO_HISTORY: {
      const { history } = state;
      const { command } = action;

      return { ...state, history: [...history, command] };
    }
    default: {
      return state;
    }
  }
};
