import React from 'react';

import { CBuilding } from './CBuilding';

export class CCountCastle extends CBuilding {
  getView(content: JSX.Element | string) {
    return <div className="building--count-castle">{content}</div>;
  }
}
