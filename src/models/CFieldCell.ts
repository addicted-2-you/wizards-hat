import { CBuilding } from './buildings/CBuilding';

export class CFieldCell {
  public xCoord: number;
  public yCoord: number;

  public building: CBuilding | null;

  constructor(xCoord: number, yCoord: number, building?: CBuilding) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;

    this.building = building || null;
  }
}
