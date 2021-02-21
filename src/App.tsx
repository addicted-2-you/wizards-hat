/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import AppHeader from 'components/AppHeader';
import GameView from 'components/game-view/GameView';
import MainMenu from 'components/MainMenu';
import Loading from 'components/Loading';
import AppFooter from 'components/AppFooter';

import { TStore } from 'store';
import { selectMenuVisibility } from 'store/selectors/app.selectors';
import {
  selectIsTerminalFocused,
  selectTerminalVisibility,
} from 'store/selectors/terminal.selectors';
import { toggleMenu } from 'store/action-creators/app.action-creators';
import { toggleTerminal, unfocusTerminal } from 'store/action-creators/terminal.action-creators';
import { selectGameStage, selectIsCurrentUserTurn } from 'store/selectors/game.selectors';

const mapStateToProps = (store: TStore) => ({
  isTerminalVisible: selectTerminalVisibility(store),
  isTerminalFocused: selectIsTerminalFocused(store),
  isMenuVisible: selectMenuVisibility(store),
  isCurrentUserTurn: selectIsCurrentUserTurn(store),
  gameStage: selectGameStage(store),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchToggleMenu: () => dispatch(toggleMenu()),
  dispatchToggleTerminal: () => dispatch(toggleTerminal()),
  dispatchUnfocusTerminal: () => dispatch(unfocusTerminal()),
});

type TAppProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class App extends React.Component<TAppProps> {
  constructor(props: TAppProps) {
    super(props);

    this.globalKeyDownHandler = this.globalKeyDownHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.globalKeyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.globalKeyDownHandler);
  }

  // event handlers
  globalKeyDownHandler(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        if (this.props.isTerminalFocused) {
          this.props.dispatchToggleTerminal();
          this.props.dispatchUnfocusTerminal();
        } else {
          this.props.dispatchToggleMenu();
        }

        break;
      }
      case '`': {
        if (event.ctrlKey) {
          this.props.dispatchToggleTerminal();
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  render() {
    return (
      <>
        <AppHeader />
        <GameView />
        <MainMenu />
        <Loading />
        <AppFooter />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
