import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';

export interface IToggleTerminal {
  type: ETerminalActionTypes.TOGGLE_TERMINAL;
}

export interface IAddToHistory {
  type: ETerminalActionTypes.ADD_TO_HISTORY;
  command: string;
}

export type TTerminalAction = IToggleTerminal | IAddToHistory;
