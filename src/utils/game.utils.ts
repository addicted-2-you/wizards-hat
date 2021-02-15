import { GAME_FIELD_SIZE } from 'constants/game.constants';

import { CCountCastle } from 'models/buildings/CCountCastle';
import { CFieldCell } from 'models/CFieldCell';

export function generateEmptyGameField(gameFieldSize = GAME_FIELD_SIZE): CFieldCell[] {
  const gameField: CFieldCell[] = [];

  for (let rowIndex = 0; rowIndex < gameFieldSize; rowIndex += 1) {
    const gameFieldRow = new Array(gameFieldSize)
      .fill(null)
      .map((item, columnIndex) => new CFieldCell(columnIndex, rowIndex));

    gameField.push(...gameFieldRow);
  }

  return gameField;
}

export function placeCountCastle(
  gameField: CFieldCell[],
  countCastleCell: [number, number],
): CFieldCell[] {
  const [xCoord, yCoord] = countCastleCell;

  return gameField.map((fieldCell) => {
    if (
      fieldCell.xCoord - xCoord >= 0 &&
      fieldCell.xCoord - xCoord <= 1 &&
      fieldCell.yCoord - yCoord >= 0 &&
      fieldCell.yCoord - yCoord <= 1
    ) {
      return new CFieldCell(fieldCell.xCoord, fieldCell.yCoord, new CCountCastle());
    }

    return fieldCell;
  });
}

export function generateOwnGameField(
  gameFieldSize = GAME_FIELD_SIZE,
  countCastleCell: [number, number],
) {
  return placeCountCastle(generateEmptyGameField(gameFieldSize), countCastleCell);
}
