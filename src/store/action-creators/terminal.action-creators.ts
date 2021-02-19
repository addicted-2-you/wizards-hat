import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';
import * as TerminalActions from 'store/actions/terminal.actions';

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
