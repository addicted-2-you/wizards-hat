import { connect } from 'react-redux';

import GameField from 'components/game-view/GameField';

import { selectOpponentsGameField } from 'store/selectors/game.selectors';

const mapStateToProps = (store) => ({
  gameFieldData: selectOpponentsGameField(store),
});

export default connect(mapStateToProps)(GameField);
