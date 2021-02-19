/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { castSpell, toggleTerminal } from 'store/action-creators/terminal.action-creators';
import { selectHistory, selectTerminalVisibility } from 'store/selectors/terminal.selectors';

function getTerminalClassName(isTerminalVisible) {
  if (isTerminalVisible) {
    return 'terminal--active';
  }

  return 'terminal';
}

function Terminal(props) {
  const { isTerminalVisible, history } = props;
  const { dispatchToggleTerminal, dispatchCastSpell } = props;

  const [spell, setSpell] = useState('');

  const inputRef = useRef();

  function onTerminalClick(event) {
    if (
      event.target.classList.contains('terminal-header') ||
      event.target.classList.contains('terminal-header__button--close')
    ) {
      return;
    }

    inputRef.current.focus();
  }

  function onCloseTerminalClick() {
    dispatchToggleTerminal();
  }

  function onTerminalInput(event) {
    const {
      target: { value },
    } = event;

    setSpell(value);
  }

  function onTerminalKeyDown(event) {
    if (event.key === 'Enter') {
      dispatchCastSpell(spell);
      setSpell('');
    }
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
          onChange={onTerminalInput}
          onKeyDown={onTerminalKeyDown}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  isTerminalVisible: selectTerminalVisibility(store),
  history: selectHistory(store),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleTerminal: () => dispatch(toggleTerminal()),
  dispatchCastSpell: (spell) => dispatch(castSpell(spell)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
