import React from 'react';
import { connect } from 'react-redux';

import GameField from 'components/game-view/GameField';

import {
  selectOpponentsGameField,
  selectOpponentsGameFieldVisibility,
} from 'store/selectors/game.selectors';

function getOpponentGameFieldClassName(opponentGameFieldVisibility) {
  if (opponentGameFieldVisibility) {
    return 'opponent-game-field-wrapper--active';
  }

  return 'opponent-game-field-wrapper';
}

function OpponentGameField(props) {
  const { opponentGameFieldVisibility } = props;

  return (
    <div className={getOpponentGameFieldClassName(opponentGameFieldVisibility)}>
      <GameField {...props} />
    </div>
  );
}

const mapStateToProps = (store) => ({
  gameFieldData: selectOpponentsGameField(store),
  opponentGameFieldVisibility: selectOpponentsGameFieldVisibility(store),
});

export default connect(mapStateToProps)(OpponentGameField);
