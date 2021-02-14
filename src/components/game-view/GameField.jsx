import React from 'react';

import { GAME_FIELD_SIZE } from 'constants/game.constants';

import { chunkArray } from 'utils/array.utils';

function GameField(props) {
  const { gameFieldData } = props;

  const gameFieldDataByRows = chunkArray(gameFieldData, GAME_FIELD_SIZE);

  return (
    <div className="game-field">
      <div className="game-field-x-axis">
        <div className="game-field-x-axis__cell" />
        {gameFieldDataByRows.map((item, index) => (
          <div className="game-field-x-axis__cell" key={`x-axis-${index}`}>
            {index}
          </div>
        ))}
      </div>

      {gameFieldDataByRows.map((gameFieldRowData, index) => (
        <div className="game-field-row" key={`y-axis-${index}`}>
          <div className="game-field-y-axis__cell">{index}</div>

          {gameFieldRowData.map(({ xCoord, yCoord }) => (
            <div className="game-field__cell" key={`${xCoord}-${yCoord}`}>
              {`${xCoord}-${yCoord}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameField;
