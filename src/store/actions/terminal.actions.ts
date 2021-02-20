import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';

// terminal visibility
export interface IShowTerminal {
  type: ETerminalActionTypes.SHOW_TERMINAL;
}

export interface IHideTerminal {
  type: ETerminalActionTypes.HIDE_TERMINAL;
}

export interface IToggleTerminal {
  type: ETerminalActionTypes.TOGGLE_TERMINAL;
}

export interface ICastSpell {
  type: ETerminalActionTypes.CAST_SPELL;
  spell: string;
}

export interface IAddToHistory {
  type: ETerminalActionTypes.ADD_TO_HISTORY;
  command: string;
}

export type TTerminalAction =
  | IShowTerminal
  | IHideTerminal
  | IToggleTerminal
  | ICastSpell
  | IAddToHistory;
