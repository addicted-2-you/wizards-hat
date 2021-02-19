import React from 'react';

import AppHeader from 'components/AppHeader';
import GameView from 'components/game-view/GameView';
import MainMenu from 'components/MainMenu';
import Loading from 'components/Loading';
import AppFooter from 'components/AppFooter';

function App() {
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

export default App;
