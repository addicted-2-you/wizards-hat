import React from 'react';
import { connect } from 'react-redux';

import GameField from 'components/game-view/GameField';

import {
  selectOpponentsGameField,
  selectOpponentsGameFieldVisibility,
} from 'store/selectors/game.selectors';

const mapStateToProps = (store) => ({
  gameFieldData: selectOpponentsGameField(store),
  opponentGameFieldVisibility: selectOpponentsGameFieldVisibility(store),
});

export default connect(mapStateToProps)(GameField);
