import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';

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

export type TTerminalAction = IToggleTerminal | ICastSpell | IAddToHistory;
