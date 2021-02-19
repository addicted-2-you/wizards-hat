import React from 'react';
import { connect } from 'react-redux';

// import Ouroboros from 'assets/images/ouroboros.svg';

import { TStore } from 'store';
import { selectSpinnerVisibility } from 'store/selectors/app.selectors';

function getSpinnerClassName(isSpinnerVisible: boolean) {
  if (isSpinnerVisible) {
    return 'loading--active';
  }

  return 'loading';
}

export interface ILoadingProps {
  isSpinnerVisible: boolean;
}

function Loading(props: ILoadingProps): JSX.Element {
  const { isSpinnerVisible } = props;

  return <div className={getSpinnerClassName(isSpinnerVisible)} />;
}

const mapStateToProps = (store: TStore) => ({
  isSpinnerVisible: selectSpinnerVisibility(store),
});

export default connect(mapStateToProps)(Loading);
