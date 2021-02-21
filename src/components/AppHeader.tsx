import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TStore } from 'store';
import { toggleMenu } from 'store/action-creators/app.action-creators';
import {
  selectGameStage,
  selectIsCurrentUserTurn,
  selectSecondsLeft,
} from 'store/selectors/game.selectors';
import { EGameStages } from 'models/EGameStages';

function getAppHeaderTimerClassName(isCurrentUserTurn: boolean, gameStage: EGameStages) {
  if (gameStage === EGameStages.IN_PROGRESS) {
    if (isCurrentUserTurn) {
      return 'app-header__timer--own-turn';
    }

    return 'app-header__timer--opponent-turn';
  }

  return 'app-header__timer';
}

const mapStateToProps = (store: TStore) => ({
  secondsLeft: selectSecondsLeft(store),
  isCurrentUserTurn: selectIsCurrentUserTurn(store),
  gameState: selectGameStage(store),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchToggleMenu: () => dispatch(toggleMenu()),
});

type TAppHeaderProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

function AppHeader(props: TAppHeaderProps) {
  const { secondsLeft, isCurrentUserTurn, gameState, dispatchToggleMenu } = props;

  function onToggleMenuButtonClick() {
    dispatchToggleMenu();
  }

  return (
    <header className="app-header">
      <div className="app-header-title-line">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className="app-header__main-menu-button"
          type="button"
          onClick={onToggleMenuButtonClick}
        />
        <h1 className="app-header__title">Wizard&#39;s hat</h1>
      </div>

      <div className="app-header-timer-line">
        <h2 className={getAppHeaderTimerClassName(isCurrentUserTurn, gameState)}>{secondsLeft}</h2>
      </div>
    </header>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
