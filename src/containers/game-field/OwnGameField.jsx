import { connect } from 'react-redux';

import GameField from 'components/game-view/GameField';

import { selectOwnGameField } from 'store/selectors/game.selectors';

const mapStateToProps = (store) => ({
  gameFieldData: selectOwnGameField(store),
});

export default connect(mapStateToProps)(GameField);
