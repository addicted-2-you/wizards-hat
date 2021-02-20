import React from 'react';

import { CBuilding } from './buildings/CBuilding';
import { CEmptyBuilding } from './buildings/CEmptyBuilding';

function getGameCellClassName(isDestroyed: boolean) {
  if (isDestroyed) {
    return 'game-field__cell--destroyed';
  }

  return 'game-field__cell';
}

interface IFieldCellParams {
  xCoord: number;
  yCoord: number;
  building?: CBuilding;
  isDestroyed?: boolean;
}

export class CFieldCell {
  public xCoord: number;

  public yCoord: number;

  public isDestroyed: boolean;

  public building: CBuilding;

  constructor({ xCoord, yCoord, building, isDestroyed }: IFieldCellParams) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;

    this.isDestroyed = isDestroyed || false;

    this.building = building || new CEmptyBuilding();
  }

  setBuilding(building: CBuilding): void {
    this.building = building;
  }

  render(content: JSX.Element | string): JSX.Element {
    return (
      <div className={getGameCellClassName(this.isDestroyed)} key={`${this.xCoord}-${this.yCoord}`}>
        {this.building.getView(content)}
      </div>
    );
  }
}
