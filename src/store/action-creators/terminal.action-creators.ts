import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';
import * as TerminalActions from 'store/actions/terminal.actions';

// terminal visibility
export const showTerminal = (): TerminalActions.IShowTerminal => ({
  type: ETerminalActionTypes.SHOW_TERMINAL,
});

export const hideTerminal = (): TerminalActions.IHideTerminal => ({
  type: ETerminalActionTypes.HIDE_TERMINAL,
});

export const toggleTerminal = (): TerminalActions.IToggleTerminal => ({
  type: ETerminalActionTypes.TOGGLE_TERMINAL,
});

export const focusTerminal = (): TerminalActions.IFocusTerminal => ({
  type: ETerminalActionTypes.FOCUS_TERMINAL,
});

export const unfocusTerminal = (): TerminalActions.IUnfocusTerminal => ({
  type: ETerminalActionTypes.UNFOCUS_TERMINAL,
});

export const toggleTerminalFocus = (): TerminalActions.IToggleTerminalFocus => ({
  type: ETerminalActionTypes.TOGGLE_TERMINAL_FOCUS,
});

// flow
export const castSpell = (spell: string): TerminalActions.ICastSpell => ({
  type: ETerminalActionTypes.CAST_SPELL,
  spell,
});

export const addToHistory = (command: string): TerminalActions.IAddToHistory => ({
  type: ETerminalActionTypes.ADD_TO_HISTORY,
  command,
});
