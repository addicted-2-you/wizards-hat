import { COUNT_CASTLE_SIZE, GAME_FIELD_SIZE } from 'constants/game.constants';

import { CCountCastle } from 'models/buildings/CCountCastle';
import { CFieldCell } from 'models/CFieldCell';
import { EGameStatuses } from 'models/EGameStatuses';

import { getRandomNumberInInterval } from './math.utils';

function getRandomCell(fieldSize: number, objectHeight = 0, objectWidth = 0): [number, number] {
  return [
    getRandomNumberInInterval(0, fieldSize - objectWidth),
    getRandomNumberInInterval(0, fieldSize - objectHeight),
  ];
}

export function generateEmptyGameField(gameFieldSize = GAME_FIELD_SIZE): CFieldCell[] {
  const gameField: CFieldCell[] = [];

  for (let yCoord = 0; yCoord < gameFieldSize; yCoord += 1) {
    const gameFieldRow = new Array(gameFieldSize)
      .fill(null)
      .map((item, xCoord) => new CFieldCell({ xCoord, yCoord }));

    gameField.push(...gameFieldRow);
  }

  return gameField;
}

export function placeCountCastle(gameField: CFieldCell[]): CFieldCell[] {
  const [xCoord, yCoord] = getRandomCell(
    Math.sqrt(gameField.length),
    COUNT_CASTLE_SIZE,
    COUNT_CASTLE_SIZE,
  );

  return gameField.map((fieldCell) => {
    if (
      fieldCell.xCoord - xCoord >= 0 &&
      fieldCell.xCoord - xCoord <= COUNT_CASTLE_SIZE - 1 &&
      fieldCell.yCoord - yCoord >= 0 &&
      fieldCell.yCoord - yCoord <= COUNT_CASTLE_SIZE - 1
    ) {
      return new CFieldCell({ ...fieldCell, building: new CCountCastle() });
    }

    return fieldCell;
  });
}

export function generateOwnGameField(gameFieldSize = GAME_FIELD_SIZE): CFieldCell[] {
  return placeCountCastle(generateEmptyGameField(gameFieldSize));
}

export function getGameOverMessage(gameStatus: EGameStatuses): { className: string; text: string } {
  if (gameStatus === EGameStatuses.WON) {
    return { className: 'game-over-message--victory', text: 'You won !' };
  }

  return { className: 'game-over-message--lose', text: 'You lose !' };
}
