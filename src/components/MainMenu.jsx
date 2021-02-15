import React from 'react';
import { connect } from 'react-redux';

import { initSingleGame } from 'store/action-creators/game.action-creators';
import { selectMenuVisibility } from 'store/selectors/app.selectors';

function getMainMenuClassName(isMenuVisible) {
  if (isMenuVisible) {
    return 'main-menu--active';
  }

  return 'main-menu';
}

function MainMenu(props) {
  const { isMenuVisible, dispatchInitSingleGame } = props;

  function onPlaySingleClick() {
    dispatchInitSingleGame();
  }

  return (
    <div className={getMainMenuClassName(isMenuVisible)}>
      <h2 className="main-menu__title">Main menu</h2>
      <div className="menu-buttons-wrapper">
        <div className="menu-buttons">
          <button type="button" className="menu-button" onClick={onPlaySingleClick}>
            Play single
          </button>
          <button type="button" className="menu-button">
            Play online
          </button>
          <button type="button" className="menu-button">
            Quite
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  isMenuVisible: selectMenuVisibility(store),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchInitSingleGame: () => dispatch(initSingleGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
