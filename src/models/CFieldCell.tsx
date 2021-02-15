import React from 'react';

import { CBuilding } from './buildings/CBuilding';
import { CEmptyBuilding } from './buildings/CEmptyBuilding';

export class CFieldCell {
  public xCoord: number;
  public yCoord: number;

  private building: CBuilding;

  constructor(xCoord: number, yCoord: number, building?: CBuilding) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;

    this.building = building || new CEmptyBuilding();
  }

  setBuilding(building: CBuilding) {
    this.building = building;
  }

  render(content: JSX.Element | string) {
    return (
      <div className="game-field__cell" key={`${this.xCoord}-${this.yCoord}`}>
        {this.building.getView(content)}
      </div>
    );
  }
}
