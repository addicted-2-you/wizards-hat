import { EGameStatuses } from 'models/EGameStatuses';
import React from 'react';
import { connect } from 'react-redux';

import { TStore } from 'store';
import { selectGameStatus } from 'store/selectors/game.selectors';

import { getGameOverMessage } from 'utils/game.utils';

interface IGameOverMessageProps {
  gameStatus: EGameStatuses;
}

function GameOverMessage(props: IGameOverMessageProps) {
  const { gameStatus } = props;

  const [gameOverText, setGameOverText] = React.useState('');
  const [gameOverClassName, setGameOverClassName] = React.useState('');
  const [gameOverWrapperClassName, setGameOverWrapperClassName] = React.useState(
    'game-over-message-wrapper',
  );

  React.useEffect(() => {
    const { text, className } = getGameOverMessage(gameStatus);

    setGameOverText(text);
    setGameOverClassName(className);
  }, [gameStatus]);

  React.useEffect(() => {
    if (gameStatus === EGameStatuses.WON || gameStatus === EGameStatuses.LOSE) {
      setGameOverWrapperClassName('game-over-message-wrapper--active');
    } else {
      setGameOverWrapperClassName('game-over-message-wrapper');
    }
  }, [gameStatus]);

  return (
    <div className={gameOverWrapperClassName}>
      <h3 className={gameOverClassName}>{gameOverText}</h3>
    </div>
  );
}

const mapStateToProps = (store: TStore) => ({
  gameStatus: selectGameStatus(store),
});

export default connect(mapStateToProps)(GameOverMessage);
