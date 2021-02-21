/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { TStore } from 'store';
import {
  castSpell,
  focusTerminal,
  toggleTerminal,
  unfocusTerminal,
} from 'store/action-creators/terminal.action-creators';
import {
  selectHistory,
  selectIsTerminalFocused,
  selectTerminalVisibility,
} from 'store/selectors/terminal.selectors';

function getTerminalClassName(isTerminalVisible: boolean) {
  if (isTerminalVisible) {
    return 'terminal--active';
  }

  return 'terminal';
}

const mapStateToProps = (store: TStore) => ({
  isTerminalVisible: selectTerminalVisibility(store),
  isTerminalFocused: selectIsTerminalFocused(store),
  history: selectHistory(store),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchToggleTerminal: () => dispatch(toggleTerminal()),
  dispatchFocusTerminal: () => dispatch(focusTerminal()),
  dispatchUnfocusTerminal: () => dispatch(unfocusTerminal()),
  dispatchCastSpell: (spell) => dispatch(castSpell(spell)),
});

type TTerminalProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

function Terminal(props: TTerminalProps) {
  const { isTerminalVisible, isTerminalFocused, history } = props;
  const {
    dispatchToggleTerminal,
    dispatchCastSpell,
    dispatchFocusTerminal,
    dispatchUnfocusTerminal,
  } = props;

  const [spell, setSpell] = useState('');

  const inputRef = useRef();

  React.useEffect(() => {
    if (!isTerminalVisible) {
      inputRef.current.blur();
    }
  }, [isTerminalVisible]);

  function onTerminalClick(event: React.MouseEvent) {
    if (
      (event.target as HTMLDivElement).classList.contains('terminal-header') ||
      (event.target as HTMLDivElement).classList.contains('terminal-header__button--close')
    ) {
      return;
    }

    inputRef.current.focus();
    dispatchFocusTerminal();
  }

  function onCloseTerminalClick() {
    dispatchToggleTerminal();
    inputRef.current.blur();
    dispatchUnfocusTerminal();
  }

  function onTerminalChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSpell((event.target as HTMLInputElement).value);
  }

  function onTerminalKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      dispatchCastSpell(spell);
      setSpell('');
    }
  }

  function onTerminalBlur() {
    dispatchUnfocusTerminal();
  }

  return (
    <div className={getTerminalClassName(isTerminalVisible)} onClick={onTerminalClick}>
      <div className="terminal-header">
        <button
          type="button"
          className="terminal-header__button--close"
          onClick={onCloseTerminalClick}
        />
      </div>

      <ul className="input-history">
        {history.map((historyCommand, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="input-history__item" key={index}>
            {historyCommand}
          </li>
        ))}
      </ul>

      <div className="terminal-input-line">
        <span className="terminal-input-line__login">[user@quiet-grove]</span>
        <input
          className="terminal-input-line__input"
          type="text"
          value={spell}
          onChange={onTerminalChange}
          onKeyDown={onTerminalKeyDown}
          onBlur={onTerminalBlur}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
