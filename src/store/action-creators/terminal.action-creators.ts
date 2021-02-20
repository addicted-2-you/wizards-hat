import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';
import * as TerminalActions from 'store/actions/terminal.actions';

// terminal
export const showTerminal = (): TerminalActions.IShowTerminal => ({
  type: ETerminalActionTypes.SHOW_TERMINAL,
});

export const hideTerminal = (): TerminalActions.IHideTerminal => ({
  type: ETerminalActionTypes.HIDE_TERMINAL,
});

export const toggleTerminal = (): TerminalActions.IToggleTerminal => ({
  type: ETerminalActionTypes.TOGGLE_TERMINAL,
});

export const castSpell = (spell: string): TerminalActions.ICastSpell => ({
  type: ETerminalActionTypes.CAST_SPELL,
  spell,
});

export const addToHistory = (command: string): TerminalActions.IAddToHistory => ({
  type: ETerminalActionTypes.ADD_TO_HISTORY,
  command,
});
