import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import appReducer from './reducers/app.reducer';
import gameReducer from './reducers/game.reducer';
import terminalReducer from './reducers/terminal.reducer';

// sagas
import { watchInitSingleGame } from './sagas/game.saga';

const rootReducer = combineReducers({
  appState: appReducer,
  gameState: gameReducer,
  terminalState: terminalReducer,
});

const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, rootMiddleware);

sagaMiddleware.run(watchInitSingleGame);

export type TStore = ReturnType<typeof rootReducer>;

export { store };
