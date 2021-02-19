import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import appReducer from './reducers/app.reducer';
import gameReducer from './reducers/game.reducer';
import terminalReducer from './reducers/terminal.reducer';

// sagas
import { watchOnlineGame, watchInitSingleGame } from './sagas/game.sagas';
import { watchSpelling } from './sagas/terminal.sagas';

const rootReducer = combineReducers({
  appState: appReducer,
  gameState: gameReducer,
  terminalState: terminalReducer,
});

const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, rootMiddleware);

// game sagas
sagaMiddleware.run(watchInitSingleGame);
sagaMiddleware.run(watchOnlineGame);

// terminal sagas
sagaMiddleware.run(watchSpelling);

export type TStore = ReturnType<typeof rootReducer>;

export { store };
