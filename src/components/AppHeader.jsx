import React from 'react';
import { connect } from 'react-redux';

import { toggleMenu } from 'store/action-creators/app.action-creators';

function AppHeader(props) {
  const { dispatchToggleMenu } = props;

  function onToggleMenuButtonClick() {
    dispatchToggleMenu();
  }

  return (
    <header className="app-header">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        className="app-header__main-menu-button"
        type="button"
        onClick={onToggleMenuButtonClick}
      />
      <h1 className="app-header__title">Wizard&#39;s hat</h1>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleMenu: () => dispatch(toggleMenu()),
});

export default connect(null, mapDispatchToProps)(AppHeader);
