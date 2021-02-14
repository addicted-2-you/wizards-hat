import React from 'react';

import AppHeader from 'components/AppHeader';
import GameView from 'components/game-view/GameView';
import MainMenu from 'components/MainMenu';
import AppFooter from 'components/AppFooter';

function App() {
  return (
    <>
      <AppHeader />
      <GameView />
      <MainMenu />
      <AppFooter />
    </>
  );
}

export default App;
