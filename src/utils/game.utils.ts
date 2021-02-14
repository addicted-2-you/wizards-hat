import { GAME_FIELD_SIZE } from 'constants/game.constants';

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
