import React from 'react';

import OpponentGameField from 'containers/game-field/OpponentGameField';
import OwnGameField from 'containers/game-field/OwnGameField';

import Terminal from './Terminal';

function GameView() {
  return (
    <div className="game-view">
      <div className="game-fields">
        <OwnGameField />
        <OpponentGameField />
      </div>

      <Terminal />
    </div>
  );
}

export default GameView;
