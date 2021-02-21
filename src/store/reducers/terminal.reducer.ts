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
      return { ...state, isTerminalVisible: !state.isTerminalVisible };
    }
    case ETerminalActionTypes.FOCUS_TERMINAL: {
      return { ...state, isTerminalFocused: true };
    }
    case ETerminalActionTypes.UNFOCUS_TERMINAL: {
      return { ...state, isTerminalFocused: false };
    }
    case ETerminalActionTypes.TOGGLE_TERMINAL_FOCUS: {
      return { ...state, isTerminalFocused: !state.isTerminalFocused };
    }
    // flow
    case ETerminalActionTypes.ADD_TO_HISTORY: {
      return { ...state, history: [...state.history, action.command] };
    }
    default: {
      return state;
    }
  }
};
