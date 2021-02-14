import { TStore } from 'store';

export const selectTerminalVisibility = (store: TStore): boolean =>
  store.terminalState.isTerminalVisible;

export const selectHistory = (store: TStore): string[] => store.terminalState.history;
