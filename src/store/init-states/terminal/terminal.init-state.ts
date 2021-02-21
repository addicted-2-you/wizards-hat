import { ITerminalState } from './terminal.state-type';

export const terminalInitState: ITerminalState = {
  isTerminalVisible: false,
  isTerminalFocused: false,
  history: [],
};
