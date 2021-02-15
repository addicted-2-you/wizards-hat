import React from 'react';

import { CBuilding } from './CBuilding';

export class CEmptyBuilding extends CBuilding {
  getView(content: JSX.Element | string) {
    return <>{content}</>;
  }
}
